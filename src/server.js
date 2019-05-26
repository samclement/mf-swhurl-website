const fs = require('fs')
const express = require('express')
const compression = require('compression')
const next = require('next')
const axios = require('axios')
const { setupCache } = require('axios-cache-adapter')
const cache = setupCache({ maxAge: 5 * 60 * 1000 })
const api = axios.create({ adapter: cache.adapter })
const plpParser = require('./lib/plp.js')

const BASE_URL = `https://www.matchesfashion.com`
const API_KEY = process.env.API_KEY || ''
const headers = { 'User-Agent': `API/${API_KEY}`, 'Accept-Encoding': 'gzip' }

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = app.getRequestHandler()
const promBundle = require('express-prom-bundle')
const metricsMiddleware = promBundle({ includeMethod: true, includePath: true })

app.prepare().then(() => {
  const server = express()
  server.use(compression())
  server.use(metricsMiddleware)

  server.get('/version', (req, res) => {
    res.set('Content-Type', 'text/plain')
    fs.createReadStream('./version.txt')
      .on('error', e => res.status(500).send(e))
      .pipe(res)
  })

  // API
  // Catalogue

  server.get('/api/catalogue/*', (req, res) => {
    const cleanPath = req.url.replace(/^\/api\/catalogue\//gi, '')
    const delimiter = cleanPath.includes('?') ? '&' : '?'
    const formatPath = `${cleanPath}${delimiter}format=json`
    const url = `${BASE_URL}/${formatPath}`
    const opts = { url, headers }
    api(opts)
      .then(data => {
        const parsed = plpParser.parseSearchResults(data.data)
        res.send(parsed)
      })
      .catch(err => console.log(err))
  })

  server.get('/api/products/:code', (req, res) => {
    const url = `${BASE_URL}/ajax/p/${req.params.code}`
    const opts = { url, headers }
    api(opts)
      .then(response => {
        const product = response.data
        res.send(product)
      })
      .catch(err => console.log(err))
  })

  // PAGES

  server.get('/plp/:url', (req, res) => {
    return app.render(req, res, '/plp', { url: req.params.url })
  })

  server.get('/pdp', (req, res) => {
    return app.render(req, res, '/pdp', { code: req.query.code })
  })

  server.get('*', (req, res) => {
    // SSR for PLP SEO URLs
    if (req.url.startsWith('/mens') || req.url.startsWith('/womens')) {
      req.query.url = req.url
      return app.render(req, res, '/plp', { url: req.url })
    }

    // SSR for PDP SEO URLs
    if (req.url.startsWith('/products')) {
      const l = req.url.length
      const code = req.url.substring(l - 7, l)
      req.query.code = code
      return app.render(req, res, '/pdp', { code: code })
    }

    // Pages
    handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000') // eslint-disable-line
  })
})

const fs = require('fs')
const express = require('express')
const compression = require('compression')
const next = require('next')
const axios = require('axios')
const parser = require('./lib/plp.js')

const cache = require('memory-cache')
const BASE_URL = `https://www.matchesfashion.com`
const API_KEY = process.env.API_KEY || ''
const headers = { 'User-Agent': `API/${API_KEY}`, 'Accept-Encoding': 'gzip' }

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
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
  // Navigation

  server.get('/api/navigation/:gender', (req, res) => {
    const url = `${BASE_URL}/${req.params.gender}/shop/clothing?format=json`
    const opts = { url, headers }
    axios(opts)
      .then((data) => {
        const parsed = parser.parseNavigation(data.data)
        res.send(parsed)
      }).catch((err) => console.log(err))
  })

  // Catalogue

  server.get('/api/catalogue/*', (req, res) => {
    const cleanPath = req.url.replace(/^\/api\/catalogue\//gi, '')
    const delimiter = cleanPath.includes('?') ? '&' : '?'
    const formatPath = `${cleanPath}${delimiter}format=json`
    const url = `${BASE_URL}/${formatPath}`
    const cachedSearchResults = cache.get(encodeURIComponent(url))
    if (cachedSearchResults) {
      res.send(cachedSearchResults)
      return
    }
    const opts = { url, headers }
    axios(opts)
      .then((data) => {
        const parsed = parser.parseSearchResults(data.data)
        cache.put(encodeURIComponent(url), parsed, 1000 * 60 * 10)
        res.send(parsed)
      }).catch((err) => console.log(err))
  })

  // PAGES

  server.get('/plp/:url', (req, res) => {
    return app.render(req, res, '/plp', { url: req.params.url })
  })

  server.get('*', (req, res) => {
    // SSR for PLP SEO URLs
    if (req.url.startsWith('/mens') || req.url.startsWith('/womens')) {
      req.query.url = req.url
      return app.render(req, res, '/plp', { url: req.url })
    }

    // Pages
    handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000') // eslint-disable-line
  })
})

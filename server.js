const fs = require('fs')
const express = require('express')
const next = require('next')
const request = require('request')
const parser = require('./lib/plp.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const promBundle = require('express-prom-bundle')
const metricsMiddleware = promBundle({ includeMethod: true, includePath: true })

app.prepare().then(() => {
  const server = express()
  server.use(metricsMiddleware)

  server.get('/version', (req, res) => {
    res.set('Content-Type', 'text/plain')
    fs.createReadStream('./version.txt')
      .on('error', e => res.status(500).send(e))
      .pipe(res)
  })

  // API

  server.get('/api/demo', (req, res) => {
    res.send({ message: 'Remote message.' })
  })

  // Navigation

  server.get('/api/navigation/:gender', (req, res) => {
    const opts = {
      url: `https://www.matchesfashion.com/${req.params.gender}/shop/clothing?format=json`,
      headers: {
        'User-Agent': 'API'
      }
    }
    request(opts, (err, response, body) => {
      if (err) {
        console.log(err)
      }
      const parsed = JSON.parse(body)
      const data = parser.parseNavigation(parsed.level1CategoriesData)
      res.send(data)
    })
  })

  // Catalogue

  server.get('/api/catalogue/*', (req, res) => {
    const cleanPath = req.url.replace(/^\/api\/catalogue\//gi, '')
    const delimiter = cleanPath.includes('?') ? '&' : '?'
    const formatPath = `${cleanPath}${delimiter}format=json`
    const opts = {
      url: `https://www.matchesfashion.com/${formatPath}`,
      headers: {
        'User-Agent': 'API'
      }
    }
    request(opts, (err, response, body) => {
      if (err) {
        console.log(err)
      }
      const parsed = JSON.parse(body)
      const data = parser.parseSearchResults(parsed)
      res.send(data)
    })
  })

  // PAGES

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000') // eslint-disable-line
  })
})

const express = require('express')
const { parse } = require('url')
const next = require('next')
const { version } = require('./package')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const promBundle = require("express-prom-bundle")
const metricsMiddleware = promBundle({includeMethod: true, includePath: true})

app.prepare().then(() => {
  const server = express()
  server.use(metricsMiddleware)

  server.get('/version', (req, res) => {
    res.send(version)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

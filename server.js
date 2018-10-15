const Instrument = require('@risingstack/opentracing-auto')
const jaeger = require('jaeger-client')
const UDPSender = require('./node_modules/jaeger-client/dist/src/reporters/udp_sender.js')
const env = process.env.ENV || 'local'
const jaegerHost = process.env.JAEGER_HOST || 'jaeger'
const fs = require('fs')

// prettier-ignore
new Instrument({ // eslint-disable-line
  tracers: [
    new jaeger.Tracer(
      `swhurl-website-${env}`,
      new jaeger.RemoteReporter(new UDPSender.default({ host: jaegerHost })), // eslint-disable-line
      new jaeger.RateLimitingSampler(1),
      {}
    )
  ]
})

const express = require('express')
const next = require('next')

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

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000') // eslint-disable-line
  })
})

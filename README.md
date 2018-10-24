# Next.js app  demo application

[![Greenkeeper badge](https://badges.greenkeeper.io/samclement/swhurl-website.svg)](https://greenkeeper.io/)

Demo Nextjs application that includes: styled-compoenents, open-tracing, prometheus instrumentation and jest snapshot testing.

## Install

- `npm install`

## Run

### Development

- `npm run dev`

### Production

- `npm run build`
- `npm start`

### Docker

- `docker build -t registry.swhurl.com/swhurl/website .`
- `docker run -d --init --restart always --net swhurl --name website swhurl/website`

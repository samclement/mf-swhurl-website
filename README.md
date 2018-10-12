# Next.js app  with styled-components

[![Greenkeeper badge](https://badges.greenkeeper.io/samclement/swhurl-website.svg)](https://greenkeeper.io/)

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
- `docker run -d --init --restart always --net swhurl --name website registry.swhurl.com/swhurl/website`

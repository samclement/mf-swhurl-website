# Next.js app  with styled-components

[![Greenkeeper badge](https://badges.greenkeeper.io/samclement/swhurl-website.svg)](https://greenkeeper.io/)

## Install

- `yarn install`

## Run

### Development

- `yarn run dev`

### Production

- `yarn run build`
- `yarn start`

### Docker

- `docker build -t registry.swhurl.com/swhurl/website .`
- `docker run -d --init --restart always --net swhurl --name website registry.swhurl.com/swhurl/website`

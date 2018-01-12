# Example app with styled-components

[![Greenkeeper badge](https://badges.greenkeeper.io/samclement/swhurl-website.svg)](https://greenkeeper.io/)

## How to use

- `docker build -t swhurl/website .`
- `docker run -d --restart always --net swhurl --name website swhurl/website`

## Dev (dev.swhurl.com)

- `docker build -t swhurl/website-dev .`
- `docker run -it -d --rm -v ${PWD}/:/www/ --name website-dev --net swhurl swhurl/website-dev`


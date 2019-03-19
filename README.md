# Next.js app  demo application

[![CircleCI](https://circleci.com/gh/samclement/swhurl-website.svg?style=svg)](https://circleci.com/gh/samclement/swhurl-website)
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

#### Create test base for faster builds

- `docker build -t swhurl/website-test-base:node-10-chrome-stable -f Dockerfile.test-base .`
- `docker push swhurl/website-test-base:node-10-chrome-stable`

#### Build and run container image

- `docker build -t swhurl/website .`
- `docker run -d --init --restart always --net swhurl --name website swhurl/website`

### k8s

Install `kustomize` - https://github.com/kubernetes-sigs/kustomize

- `kustomize build kustomize/web/overlays/staging | kubectl apply -f -``
- `kustomize build kustomize/web/overlays/production | kubectl apply -f -``
- `kustomize build kustomize/oauth2 | kubectl apply -f -``

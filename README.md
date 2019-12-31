# Next.js app  demo application

[![CircleCI](https://circleci.com/gh/samclement/mf-swhurl-website.svg?style=svg)](https://circleci.com/gh/samclement/mf-swhurl-website)
[![Greenkeeper badge](https://badges.greenkeeper.io/samclement/mf-swhurl-website.svg)](https://greenkeeper.io/)

Demo Nextjs application that includes: 

- nextjs (server-side rendering single-page application)
- styled-components
- linting with eslint
- jest snapshot testing
- prettier formatting
- lighthouse performance testing
- chrome browser testing (wdio)
- greenkeeper (automatic PRs for upgrading dependencies)
- kustomize (k8s deployment configuration)

The application is deployed to a k8s cluster that includes:

- cert-manager (automatic TLS certificate provisioning from LetsEncript)
- oauth2-proxy (authentication against github)
- prometheus (infrastructure and applicaiton monitoring)
- fluentbit / loggly integration (log aggregation)

## Install

- `npm install`

## Run

You will need an API key and set it as an environment variable (`API_KEY`) for local development:

### Development

- `npm run dev`

### Production

- `npm run build`
- `npm start`

### Docker

#### Create test base for faster builds

- `docker build -t swhurl/mf-website-test-base:node-10-chrome-stable -f Dockerfile.test-base .`
- `docker push swhurl/mf-website-test-base:node-10-chrome-stable`

#### Build and run container image

- `docker build -t swhurl/mf-website .`
- `docker run -d --init --restart always --net swhurl --name website swhurl/mf-website`

### k8s

Replace placeholder secrets values for oauth with base64 encoded values:

- `github_client_id`
- `github_client_secret`
- `cookie_secret`

Replace placeholder secrets values for web with base64 encoded values:

- `apiKey`

Install via `kustomize` - https://github.com/kubernetes-sigs/kustomize

- `kustomize build kustomize/web/overlays/staging | kubectl apply -f -`
- `kustomize build kustomize/web/overlays/production | kubectl apply -f -`
- `kustomize build kustomize/oauth2 | kubectl apply -f -`

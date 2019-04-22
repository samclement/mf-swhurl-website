import { setup } from 'axios-cache-adapter'

const api = setup({
  cache: {
    maxAge: 5 * 60 * 1000
  }
})

export const getApiUrl = (isServer = true) => {
  return isServer ? 'http://localhost:3000' : `//${window.location.hostname}:${window.location.port}`
}

export const getNav = async function (req) {
  const isServer = !!req
  return api(`${getApiUrl(isServer)}/api/navigation/mens`)
}

export const getSearchResults = async function (q, isServer) {
  return api(`${getApiUrl(isServer)}/api/catalogue${q.url}`)
}

export const getProduct = async function (q, isServer) {
  return api(`${getApiUrl(isServer)}/api/products/${q.code}`)
}

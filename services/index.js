import axios from 'axios'

export const getApiUrl = (isServer = true) => {
  return isServer ? 'http://localhost:3000' : `//${window.location.hostname}:${window.location.port}`
}

export const getNav = async function (req) {
  const isServer = !!req
  return axios(`${getApiUrl(isServer)}/api/navigation/mens`)
}

export const getSearchResults = async function (q, isServer) {
  return axios(`${getApiUrl(isServer)}/api/catalogue${q.url}`)
}

export const getProduct = async function (q, isServer) {
  return axios(`${getApiUrl(isServer)}/api/product${q.url}`)
}

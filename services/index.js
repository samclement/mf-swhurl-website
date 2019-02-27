import fetch from 'node-fetch'

export const getApiUrl = (isServer = true) => {
  return isServer ? 'http://localhost:3000' : `//${window.location.hostname}:${window.location.port}`
}

export const getMessage = async function (req) {
  const isServer = !!req
  const res = await fetch(`${getApiUrl(isServer)}/api/demo`)
  return res.json()
}

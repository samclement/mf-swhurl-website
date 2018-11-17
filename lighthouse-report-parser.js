const report = require('./lighthouse.report.json')
const table = require('table').table
const s = {
  ...report.categories
}
const thresholds = {
  performance: 90,
  accessibility: 100,
  seo: 100,
  'best-practices': 100
}
let isPassing = true

let data = Object.keys(thresholds).map(key => {
  const score = s[key].score * 100
  if (score < thresholds[key]) {
    isPassing = false
  }
  return [key, score < thresholds[key] ? `${score}*` : score, thresholds[key]]
})
data.unshift(['', 'score', 'threshold'])
console.log(table(data))

if (!isPassing) {
  throw new Error(`Failed lighthouse thresholds`)
}

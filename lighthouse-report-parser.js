const report = require('./test/output/lighthouse/lighthouse.report.json')
const table = require('table').table
const s = {
  ...report.categories
}
const thresholds = {
  performance: 80,
  accessibility: 80,
  seo: 80,
  'best-practices': 80
}
let isPassing = true

const data = Object.keys(thresholds).map(key => {
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

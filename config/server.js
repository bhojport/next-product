const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
module.exports = nextApp
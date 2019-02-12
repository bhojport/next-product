const express = require('express')
const nextApp = require('./config/server')
const host = process.env.APP_HOST || 'http://localhost'
const port = parseInt(process.env.APP_PORT, 10) || 3000
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  const { productsRouter: products } = require('./routes')

  app.use(products)

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Next product serving on ${host}:${port}.`)
  })

})

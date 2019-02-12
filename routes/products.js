const express = require('express')
const router = express.Router()
const nextApp = require('../config/server')

router.get('/', (req, res) => {
  nextApp.render(req, res, '/', req.query)
})

router.get('/new', (req, res) => {
  nextApp.render(req, res, '/', { isNew: true })
})

router.get('/:id/edit', (req, res) => {
  nextApp.render(req, res, '/', { id: req.params.id, isEdit: true })
})

router.get('/:id', (req, res) => {
  nextApp.render(req, res, '/', { id: req.params.id })
})

module.exports = router
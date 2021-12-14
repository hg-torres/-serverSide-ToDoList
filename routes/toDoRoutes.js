const router = require('express').Router()
const db = require('../db')

router.get('/toDo', (req, res) => {
  db.query('SELECT * FROM toDo', (err, toDoItem) => {
    if (err) { console.log(toDoItem) }
    res.json(toDoItem)
  })
})

router.post('/toDo', (req, res) => {
  db.query('INSERT INTO toDo SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
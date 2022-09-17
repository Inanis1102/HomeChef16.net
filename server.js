const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbroutes = require('./dbroute/dbroutes')
const port = 3300
const pool = require("./dbconfig/dbconfig")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({info: 'Welcome to the rice fields'})
})

app.use('/', dbroutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
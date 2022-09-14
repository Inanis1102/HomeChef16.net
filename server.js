const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dishdb = require('./src/dbconfig/dishquery')
const userdb = require('./src/dbconfig/userquery')
const port = 3300

app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({info: 'Welcome to the rice fields'})
})

app.get('/dish/all',dishdb.getDish)
app.get('/dish/key/',dishdb.getDishAt)
app.post('/dish',dishdb.createDish)
app.put('/dish/:id',dishdb.updateDish)
app.delete('/dish/:id',dishdb.deleteDish)
app.get('/users/all',userdb.getUsers)
app.post('/users',userdb.createUser)
app.put('/users/:useracc',userdb.updateUser)
app.delete('/users/:useracc',userdb.deleteUser)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
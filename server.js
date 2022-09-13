const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./src/dbconfig/dishquery')
const port = 3300

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })

})

app.get('/dish',db.getDish)
app.post('/dish',db.createDish)
app.put('/dish/:id',db.updateDish)
app.delete('/dish/:id',db.deleteDish)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
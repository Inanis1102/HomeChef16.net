const Pool = require('pg').Pool
const pool = require("./dbconfig")

const getDish = (req, res) => {
  pool.query('SELECT * FROM dish ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
}

const getDishAt = (request,res)=>{
  var keyword = request.body
  pool.query('SELECT * FROM dish WHERE keyword LIKE $1', [keyword], (error,results)=>{
    if (error){
      throw error
    }
    res.status(200).send(results.rows)
  })
}

const createDish = (request,res)=>{
  var {dishname, keyword, type, ingredients, howtomade} = request.body
  pool.query('INSERT INTO dish (dishname, keyword, type, ingredients, howtomade) VALUES ($1, $2, $3, $4, $5) RETURNING *', [dishname, keyword, type, ingredients, howtomade], (error,results) =>{
      if (error) {
          throw error
        }
        res.status(201).send(`Dish added`)
  })
}

const updateDish = (request,res)=>{
  var id = parseInt(request.params.id)
  var {dishname, keyword, type, ingredients, howtomade} = request.body

  pool.query('UPDATE dish SET dishname = $1, keyword = $2, type=$3, ingredients=$4, howtomade=$5 WHERE "id" = $6', [dishname, keyword, type, ingredients, howtomade, id], (error,results) =>{
      if (error) {
          throw error
        }
        res.status(201).send(`Dish updated`)
      }
  )
}

const deleteDish = (request, response) => {
  var id = parseInt(request.params.id)

  pool.query('DELETE FROM dish WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Dish deleted`)
  })
}

module.exports ={
  getDish, getDishAt, createDish, updateDish, deleteDish
}
const pool = require("../dbconfig/dbconfig")
const queries = require('../dbquery/dbquery')

const getDish = (request, res) => {
  pool.query(queries.getDish, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(results.rows)
  })
}

const getDishAt = (request,res)=>{
  var {keyword} = request.params
  pool.query(queries.getDishAt, [keyword], (error,results)=>{
    if (error){
      throw error
    }
    res.status(200).send(results.rows)
  })
}

const createDish = (request,res)=>{
  var {dishname, keyword, type, ingredients, howtomade} = request.body
  pool.query(queries.createDish, [dishname, keyword, type, ingredients, howtomade], (error,results) =>{
      if (error) {
          throw error
        }
        res.status(201).send(`Dish added`)
  })
}

const updateDish = (request,res)=>{
  var id = parseInt(request.params.id)
  var {dishname, keyword, type, ingredients, howtomade} = request.body

  pool.query(queries.updateDish, [dishname, keyword, type, ingredients, howtomade, id], (error,results) =>{
      if (error) {
          throw error
        }
        res.status(201).send(`Dish updated`)
      }
  )
}

const deleteDish = (request, response) => {
  var id = parseInt(request.params.id)

  pool.query(queries.deleteDish, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Dish deleted`)
  })
}

module.exports ={
  getDish, getDishAt, createDish, updateDish, deleteDish
}
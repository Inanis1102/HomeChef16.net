const Pool = require ('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432
})

const getDish = (request, response) => {
    pool.query('SELECT * FROM dish ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const createDish = (req,res)=>{
    var {id,dishname, keyword, type, ingredients, howtomade} = request.body

    pool.query('INSERT INTO dish (id, dishname, keyword, type, ingredients, howtomade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, dishname, keyword, type, ingredients, howtomade], (error,results) =>{
        if (error) {
            throw error
          }
          response.status(201).send(`Dish added`)
    })
}

const updateDish = (req,res)=>{
    var id = parseInt(request.params.id)
    var {dishname, keyword, type, ingredients, howtomade} = request.body

    pool.query('UPDATE dish SET dishname = $1, keyword = $2, type=$3, ingredients=$4, howtomade=$5 WHERE "id" = $6', [dishname, keyword, type, ingredients, howtomade, id], (error,results) =>{
        if (error) {
            throw error
          }
          response.status(201).send(`Dish updated`)
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
    getDish, createDish, updateDish, deleteDish
}
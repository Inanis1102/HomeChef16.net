const Pool = require('pg').Pool
const pool = require("./dbconfig")

const getUsers = (req,res) =>{
    pool.query('SELECT * FROM users ORDER BY id ASC', (error,results)=>{
        if (error){
            throw error
        }
        res.status(200).send(results.rows)
    })
}

const createUser = (request,res)=>{
    var {useracc, password, username} = request.body
    pool.query('INSERT INTO users (useracc, password, username) VALUES ($1, $2, $3) RETURNING *', [useracc, password, username], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('User added')
    })
}

const updateUser = (request,res)=>{
    var id = parseInt(request.params.id)
    var {useracc, password, username} = request.body
    pool.query('UPDATE users SET useracc = $1, password = $2, username = $3 WHERE "id" = $4',[password, username, useracc, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('User updated')
    })
}

const deleteUser = (request,response)=>{
    var id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error,results)=>{
        if (error){
            throw error
        }
        response.status(200).send('User deleted')
    })
}

module.exports ={
    getUsers, createUser, updateUser, deleteUser
}
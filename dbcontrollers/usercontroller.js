const pool = require("../dbconfig/dbconfig")
const queries = require("../dbquery/dbquery")

const getUsers = (req,res) =>{
    pool.query(queries.getUsers, (error,results)=>{
        if (error){
            throw error
        }
        res.status(200).send(results.rows)
    })
}

const createUser = (request,res)=>{
    var {useracc, password, username} = request.body
    pool.query(queries.createUser, [useracc, password, username], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('User added')
    })
}

const updateUser = (request,res)=>{
    var id = parseInt(request.params.id)
    var {useracc, password, username} = request.body
    pool.query(queries.updateUser,[password, username, useracc, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('User updated')
    })
}

const deleteUser = (request,response)=>{
    var id = parseInt(request.params.id)
    pool.query(queries.deleteUser, [id], (error,results)=>{
        if (error){
            throw error
        }
        response.status(200).send('User deleted')
    })
}

module.exports ={
    getUsers, createUser, updateUser, deleteUser
}
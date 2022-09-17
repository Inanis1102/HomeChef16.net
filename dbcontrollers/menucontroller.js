const pool = require("../dbconfig/dbconfig")
const queries = require("../dbquery/dbquery")

const getMenu = (req,res)=>{
    pool.query(queries.getMenu, (error, results)=>{
        if (error) {
            throw error
        }
        res.status(200).send(results.rows)
    })
}

const createMenu = (request,res)=>{
    var {userid, breakfast, lunch, dinner} = request.body
    pool.query(queries.createMenu, [userid, breakfast, lunch, dinner], (error,results)=>{
        if (error) {
            throw error
        }
        res.status(201).send('Menu created')
    })
}

const updateMenu = (request,res)=>{
    var id=parseInt(request.params.id)
    var {userid, breakfast, lunch, dinner} = request.body

    pool.query(queries.updateMenu, [userid, breakfast, lunch, dinner, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('Menu updated')
    })
}

const updateBreakfast = (request,res)=>{
    var id=parseInt(request.params.id)
    var {breakfast} = request.body

    pool.query(queries.updateBreakfast, [breakfast, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('Menu updated')
    })
}

const updateLunch = (request,res)=>{
    var id=parseInt(request.params.id)
    var {lunch} = request.body

    pool.query(queries.updateLunch, [lunch, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('Menu updated')
    })
}

const updateDinner = (request,res)=>{
    var id=parseInt(request.params.id)
    var {dinner} = request.body

    pool.query(queries.updateDinner, [breakfast, id], (error,results)=>{
        if (error){
            throw error
        }
        res.status(201).send('Menu updated')
    })
}

const deleteMenu = (request,response)=>{
    var id = parseInt(request.params.id)

    pool.query(queries.deleteMenu, [id], (error,results)=>{
        if (error){
            throw error
        }
        response.status(200).send('Menu deleted')
    })
}

module.exports ={
    getMenu, createMenu, updateMenu, updateBreakfast, updateLunch, updateDinner, deleteMenu
}
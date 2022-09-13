module.exports = app => {
    const dish = require("../dbcontrollers/dishcontroller.js");
    var router = require("express").Router();

    //create new dish
    router.post("/", dish.create);
    //find all dish by keyword
    router.get("/:keyword", dish.findAll);
    //update dish by id
    router.put("/:id", dish.update);
    //delete dish by id
    router.delete("/:id", dish.delete);
    
    app.use('/api/dish',router);
};
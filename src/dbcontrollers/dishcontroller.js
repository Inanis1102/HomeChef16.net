const db = require("../dbmodel/dish");
const dish = db.dish;
const Op = db.sequelize.Op;

exports.create = (req,res)=>{
    if(!req.body.title){
        res.status(400).send({
            message: "Content can't be empty!"
        });
        return;
    }
    const dishs = {
        id: req.body.id,
        dishname: req.body.dishname,
        keyword: req.body.keyword,
        type: req.body.type,
        ingredients: req.body.ingredients,
        howtomade: req.body.howtomade
    };
    dish.create(dishs)
    .then(data=> {
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occured while creating dish."
        });
    });
};
exports.findAll = (req,res)=>{
    const keyword = req.query.keyword;
    var condition = keyword ? { title: { [Op.iLike]: `%${keyword}%` } } : null;
    dish.findAll({where: condition})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while finding dishes."
        });
    });
};
exports.update = (req,res)=>{
    const id = req.param.id;
    dish.update(req.body,{
        where: {id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Update success. "
            });
        } else {
            res.send({
                message: "Cannot update dish"
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "Error updating dish"
        });
    });
};
exports.delete = (req,res)=>{
    const id = req.param.id;
    dish.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num==1){
            res.send({
                message: "Delete success"
            });
        } else{
            res.send({
                message: "Cannot delete dish"
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "Error deleting dish"
        });
    });
};

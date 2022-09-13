module.exports = (sequelize, Sequelize)=>{
    var dish = sequelize.define('dish',{ /* bla */ }, {
        timestamps: false,
        freezeTableName: true,
        id: {type: Sequelize.TEXT, primaryKey: true},
        dishname: {type: Sequelize.TEXT},
        keyword:{type: Sequelize.TEXT},
        type: {type: Sequelize.TEXT},
        ingredients: {type: Sequelize.TEXT},
        howtomade:{type: Sequelize.TEXT}
    });
    return dish;
}
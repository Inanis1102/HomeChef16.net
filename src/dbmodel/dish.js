module.exports = (sequelize, Sequelize)=>{
    const dish = sequelize.define('dish', {
        id: {type: Sequelize.TEXT, primaryKey: true},
        dishname: {type: Sequelize.TEXT},
        keyword:{type: Sequelize.TEXT},
        type: {type: Sequelize.TEXT},
        ingredients: {type: Sequelize.TEXT},
        howtomade:{type: Sequelize.TEXT}
    });
    return dish;
}
module.exports = (sequelize, Sequelize)=>{
    const dish = sequelize.define("dish", {
        username: {type: Sequelize.TEXT},
        dateofmenu: {type: Sequelize.DATE},
        breakfast:{type: Sequelize.TEXT},
        lunch: {type: Sequelize.TEXT},
        dinner: {type: Sequelize.TEXT},
    });
    return dish;
}
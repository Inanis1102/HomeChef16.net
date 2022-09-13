module.exports = (sequelize, Sequelize)=>{
    const users = sequelize.define("users", {
        useracc: {type: Sequelize.TEXT},
        password: {type: Sequelize.TEXT},
        username:{type: Sequelize.TEXT},
    });
    return users;
}
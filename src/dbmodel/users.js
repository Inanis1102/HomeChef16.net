module.exports = (sequelize, Sequelize)=>{
    const users = sequelize.define("users", { /* bla */ }, {
        timestamps: false,
        freezeTableName: true,
        useracc: {type: Sequelize.TEXT},
        password: {type: Sequelize.TEXT},
        username:{type: Sequelize.TEXT},
    });
    return users;
}
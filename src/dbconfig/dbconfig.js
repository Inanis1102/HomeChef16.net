module.exports =
{
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "password",
    DB: "test",
    dialect: "postgres",
    pool:
    {
        max:50,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}
const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    dialect: 'postgres',
    port: process.env.PGPORT,
    logging: false
});

module.exports = sequelize

// Test DB Conenction //
async function test() {
    try {
        let result = await sequelize.authenticate()
        console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
    } catch (error) {
        console.error("Houve um erro ao conectar com o banco de dados:")
        console.error(error)
        process.exit()
    }
}

test()
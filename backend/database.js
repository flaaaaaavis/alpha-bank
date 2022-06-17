const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
    host: 'localhost',
    port: process.env.DATABASE_PORT
})

module.exports = pool
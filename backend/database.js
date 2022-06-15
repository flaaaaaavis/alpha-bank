const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: process.env.DATABASE_PASS,
    database: 'alpha_bank',
    host: 'localhost',
    port: 5432
})

module.exports = pool
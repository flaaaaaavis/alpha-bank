const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: '0508',
    database: 'AlphaBank',
    host: 'localhost',
    port: '5432'
})

module.exports = pool
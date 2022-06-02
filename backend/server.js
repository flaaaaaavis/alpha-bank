import express from 'express'
const app = express()
import ('dotenv').config()
import pool from './database'
const port = process.env.BACKEND_PORT

app.listen(port, () =>
    console.log(`App listening on port ${port}`)
)
import express from 'express'
const app = express()
import ('dotenv').config()
import pool from './database'
const port = process.env.BACKEND_PORT

//Setting Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Setting Cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Setting CORS
const cors = require('cors');
app.use(cors( { credentials: true , origin: 'http://localhost:3000'} ));

//ROUTER
const ROUTER_POST = require("./routers/routerPost");
const ROUTER_GET = require("./routers/routerGet");

app.use("/", ROUTER_POST, ROUTER_GET);

app.listen(port, () => console.log("Servidor Aberto em 4000"));
const express =  require('express');
const app = express();
require('dotenv').config();
const port = process.env.BACKEND_PORT;

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
const ROUTER_PUT = require("./routers/routerPut");
const ROUTER_DELETE = require("./routers/routerDelete");

app.use("/", ROUTER_POST, ROUTER_GET, ROUTER_DELETE, ROUTER_PUT);

app.listen(port, () => console.log(`Servidor Aberto em ${port}`));
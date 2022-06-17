const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const jwt = require('jsonwebtoken');
const { compare, hashPwd } = require('../src/hashController');
const pool = require("../database.js");
const { v4: uuidv4 } = require('uuid')
const geraRandom = require('../src/randomGen');
const { json } = require("express");

router.post('/login', async (req, res) => { 

    const { email, password } = req.body;
    try {
        let dbUserPassword = await pool.query(`SELECT password 
                                                 FROM users 
                                                 WHERE email = '${email}' 
                                                 AND deleted_at IS NULL`);        
        if (dbUserPassword.rows[0] === undefined) res.status(401).json({ auth: false , message: "Wrong Email"});
        dbUserPassword = dbUserPassword.rows[0].password;
        if (compare(password, dbUserPassword)) {
            try {
                // Gerando Token
                let loggedUser = await pool.query(`SELECT id 
                                                     FROM users 
                                                     WHERE email = '${email}' 
                                                     AND deleted_at IS NULL`);
                loggedUser = loggedUser.rows[0].id;
                                                     
                const userToken = jwt.sign({ user_id: loggedUser }, process.env.SECRET);
                // Gerando Sessão
                const session = { jwt: userToken, user_id: loggedUser };

                await pool.query(`INSERT INTO sessions (jwt, user_id) VALUES ('${session.jwt}', ${session.user_id})`)

                // Gerando Cookie                
                res.cookie("token", userToken);
               
                // Enviando Resposta
                const loggedInUser = await pool.query(`SELECT * 
                                             FROM users 
                                             WHERE id = ${loggedUser}`)
                res.status(200).json({ auth:true , message:"Logged In", loggedUser: loggedInUser.rows[0]});


            } catch(error) {

                console.log(error)
            }        

        } else {

            res.status(401).json({ auth: false , message: "Wrong Password"});

        }

    } catch(error) {

        console.log(error)
    }

});

router.post("/addUser", async (req, res) => {

    const { name, cpf, email, bDate, password } = req.body;
    console.log(req.body)
    const hashedPassword = hashPwd(password); 

    //Creating the User
    try {
        await pool.query(`BEGIN TRANSACTION`);

        const sql = `INSERT INTO users (cpf, name, bdate, email, password, created_at) VALUES ($1, $2, $3, $4, $5, NOW()::TIMESTAMP) RETURNING id`;
        const values = [ cpf, name, bDate, email, hashedPassword];
        await pool.query(sql, values);

    } catch(error) { 
        console.log(error)
        res.status(400).send(error)
    }

    // Creating Account and Card
    try {
        
        let user = await pool.query(`SELECT id 
                                    FROM users 
                                    WHERE email = '${email}' 
                                    AND deleted_at IS NULL`)
        user = user.rows[0].id;

        const accountQuery = `INSERT INTO accounts (created_by, created_at, user_id, uuid, balance) values ($1 , NOW()::TIMESTAMP, $1, $2, $3);`;
        const accountValues= [user, uuidv4(), 0.00]
        await pool.query(accountQuery, accountValues);

        const cardNumber = ("99999999"+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const ssid = (""+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const ExpDate = "31/12/40"
        
        const cardQuery = `INSERT INTO cards (created_by, created_at, user_id, number, expirity_date, ssid) values ($1, NOW()::TIMESTAMP, $1, $2, $3, $4);`;
        const cardValues= [ user, cardNumber, ExpDate, ssid ]

        await pool.query(cardQuery, cardValues);

        await pool.query(`COMMIT TRANSACTION`);

        res.status(200).json({status: true, message:"Usuário, Cartão e Conta criados."});

    } catch(error) {

        console.log(error)

    }
    
})

router.post('/findReceiver', async (req, res) => {
    const {method, value} = req.body;

    let receiver;

    switch(method){
        case 'cpf':
            console.log('cpf')
            receiver = await pool.query (`SELECT number, users.name
                                        FROM accounts
                                        INNER JOIN users
                                        ON user_id = users.id
                                        WHERE cpf = ('${value}')`)
            receiver = receiver.rows[0]
            console.log(receiver)
            res.send(receiver)
            break;
        case 'accountCode': 
            console.log('conta')
            receiver = await pool.query (`SELECT number, users.name
                                        FROM accounts
                                        INNER JOIN users
                                        ON user_id = users.id
                                        WHERE number = (${value})`)
            res.status(200).send(receiver.rows[0])
            break;
        default:
            console.log('defaultou')
            res.status(401).json({message: "Qq você ta fazendo amigo?"})
    }

})

module.exports = router;
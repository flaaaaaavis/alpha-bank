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
        dbUserPassword = dbUserPassword.rows[0].password;
        if (compare(password, dbUserPassword)) {
            try {
                console.log("TAMO NO TRY CARALHO PORRA")

                // Gerando Token
                let loggedUser = await pool.query(`SELECT id 
                                                     FROM users 
                                                     WHERE email = '${email}' 
                                                     AND deleted_at IS NULL`);
                loggedUser = loggedUser.rows[0].id;                                                     

                console.log("TAMO NO TRY CARALHO PORRA " +loggedUser)
                                                     
                const userToken = jwt.sign({ user_id: loggedUser }, process.env.SECRET);
                console.log("TAMO NO TRY CARALHO PORRA TOKEN " +userToken)
                // Gerando Sessão
                const session = { jwt: userToken, user_id: loggedUser };

                await pool.query(`INSERT INTO sessions (jwt, user_id) VALUES ('${session.jwt}', ${session.user_id})`)

                // Gerando Cookie
                const thirtyDays = 1000 * 60 * 60 * 24 * 30;
                res.cookie("token", userToken , {maxAge: thirtyDays, path: '/'});
               
                // Enviando Resposta
                res.status(200).json({ auth: true , userToken });

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
    const hashedPassword = hashPwd(password);

    //Creating the User
    try {

        console.log([name, cpf, email, bDate, hashedPassword]);

        const sql = `INSERT INTO users(name, cpf, email, bdate, password, created_at)
                                VALUES($1, $2, $3, $4, $5, NOW()::TIMESTAMP)
                                RETURNING id`;
        const values = [name, cpf, email, bDate, hashedPassword];

    } catch(error) {

        console.log(error)

    }

    //Creating Account and Card
    try {
        
        let user = await pool.query(`SELECT id 
                                    FROM users 
                                    WHERE email = '${email}' 
                                    AND deleted_at IS NULL`)
        user = user.rows[0].id;

        const accountQuery = "INSERT INTO accounts (created_by, created_at, user_id, uuid, balance) values ($1 , NOW()::TIMESTAMP, $1, $2, $3);";
        const accountValues= [user, uuidv4(), 0.00]
        await pool.query(accountQuery, accountValues);

        const cardNumber = ("99999999"+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const ssid = (""+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const ExpDate = "31/12/40"
        
        const cardQuery = "INSERT INTO cards (created_by, created_at, user_id, number, expirity_date, ssid) values ($1, NOW()::TIMESTAMP, $1, $2, $3, $4);";
        const cardValues= [ user, cardNumber, ExpDate, ssid ]

        await pool.query(cardQuery, cardValues);

        res.status(200).json("Usuário, Cartão e Conta criados.");

    } catch(error) {

        console.log(error)

    }
    
})

router.post('/transactions', async (req, res) => {
    
    const {method, value} = req.body;

    switch(method){

        case 'cpf':
            await pool.query (`SELECT cpf, name 
                               FROM user 
                               WHERE cpf = ${cpf}, name = ${name}`);
        break;

        case 'accountCode':
            await pool.query (`SELECT number, users.name
                               FROM accounts
                               INNER JOIN users
                               ON user_id = users.id
                               WHERE number = (${value})`)
        break;
        
    }

    if (method == 'cpf') {
        
    }    

})

                            // (`SELECT accounts.number, users.name  
                            //     FROM (users
                            //     INNER JOIN name ON users.name = ${name}
                            //     INNER JOIN accountNumber on users.accountName = 
                            //     )`);

module.exports = router;
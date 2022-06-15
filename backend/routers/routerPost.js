const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const jwt = require('jsonwebtoken');
const { compare, hashPwd } = require('../src/hashController');
const pool = require("../database.js");
const { v4: uuidv4 } = require('uuid')
const geraRandom = require('../src/randomGen');

router.post('/login', async (req, res) => { 

    const { email, password } = req.body;
    try {
        //refatorar pós banco montado: e se o usuário não existir qual vai ser o retorno?
        const dbUserPassword = await pool.query(`SELECT password 
                                                 FROM users 
                                                 WHERE email = ${email} 
                                                 AND deleted_at=null;`)   

        if (compare(password, dbUserPassword.rows[0].password)) {

            try {

                // Gerando Token
                const loggedUser = await pool.query(`SELECT id 
                                                     FROM users 
                                                     WHERE email = ${email} 
                                                     AND deleted_by=null;`)
                                                     
                const userToken = jwt.sign({ user_id: loggedUser.rows[0] }, process.env.SECRET);
                
                // Gerando Sessão
                const session = { jwt: userToken, user_id: loggedUser.rows[0] };

                await pool.query(`INSERT INTO sessions (jwt, user_id) VALUES (${session.jwt}, ${session.user_id});`)

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

        const sql = "INSERT INTO users (name, cpf, email, bdate, password) VALUES ($1, $2, $3, $4, $5);";
        const values = [name, cpf, email, bDate, hashedPassword];
        await pool.query(sql, values);

        res.status(200).json("Usuário criado.");

    } catch(error) {

        console.log(error)

    }

    //Creating Account and Card
    try {
        
        const user = await pool.query(`SELECT id 
                                       FROM users 
                                       WHERE email = ${email} 
                                       AND deleted_by=null;`);
        
        const accountQuery = "INSERT INTO accounts (created_by, created_at, user_id, uuid, balance) values ($1 , NOW()::TIMESTAMP, $1, $2, $3);";
        const accountValues= [user.rows[0].id, uuidv4(), 0.00]
        await pool.query(accountQuery, accountValues);

        const cardNumber = ("99999999"+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const SSID = (""+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9))+parseInt(geraRandom(0, 9)));
        const ExpDate = "31/12/40"
        
        const cardQuery = "INSERT INTO cards (created_by, created_at, user_id, number, expirity_date, SSID) values ($1, NOW()::TIMESTAMP, $1, $2, $3, $4);";
        const cardValues= [ user.rows[0].id, cardNumber, ExpDate, SSID ]

        await pool.query(cardQuery, cardValues);

        res.status(200).json("Cartão e Conta criados.");

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
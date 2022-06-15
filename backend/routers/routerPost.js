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
        console.log(dbUserPassword)
        if (compare(password, dbUserPassword)) {
            try {
                console.log("TAMO NO TRY CARALHO PORRA");

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
    const hashedPassword = hashPwd(password);

    //Creating the User
    try {

        console.log([name, cpf, email, bDate, hashedPassword]);

        const sql = `INSERT INTO users(name, cpf, email, bdate, password, created_at)
                                VALUES($1, $2, $3, $4, $5, NOW()::TIMESTAMP)
                                RETURNING id`;
        const values = [name, cpf, email, bDate, hashedPassword];
        await pool.query(sql, values);

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

router.post('/findReceiver', async (req, res) => {
    
    const {method, value} = req.body;
    console.log(method);
    console.log(value);
    let receiver;

    switch(method){
        case 'cpf':
            console.log('cpf')
            receiver = await pool.query (`SELECT number, users.name
                                          FROM accounts
                                          INNER JOIN users
                                          ON user_id = users.id
                                          WHERE cpf = ('${value}')`)
        break;

        case 'accountCode': 
            console.log('conta')
            receiver = await pool.query (`SELECT number, users.name
                                          FROM accounts
                                          INNER JOIN users
                                          ON user_id = users.id
                                          WHERE number = (${value})`)
        break;
        case 'uuid':
            console.log('uuid')
            receiver = await pool.query (`SELECT number, users.name
                                          FROM accounts
                                          INNER JOIN users
                                          ON user_id = users.id
                                          WHERE uuid = ('${value}')`)
        break;
        default:
            console.log('defaultou')
            res.status(401).json({message: "Qq você ta fazendo amigo?"})
    }
    
    res.status(200).json({ message: "usuario encontrado", user: receiver.rows[0] })

})

router.post("/accountByCPFnAccount", async (req, res) => {

    try {
        const cpf = req.body.cpf;
        const account = req.body.account

        let user = await pool.query(`SELECT * 
                                    FROM users 
                                    WHERE CPF = ${cpf}`);
        user = user.rows[0];

        let accountPool = await pool.query(`SELECT * 
                                        FROM accounts 
                                        WHERE number = ${account}`);
        accountPool = accountPool.rows[0];


        res.status(200).json({ message:"Done and Done", "user": user,"account": accountPool});

    } catch (error) {

        console.log(error);

    }

});

router.post("/accountByCPF", async (req, res) => {

    try {
        const cpf = req.body.cpf;
        console.log(cpf)

        let user = await pool.query(`SELECT id, name
                                    FROM users 
                                    WHERE cpf = ('${cpf}')`);
        user = user.rows[0];

        let account = await pool.query(`SELECT number
                                        FROM accounts 
                                        WHERE user_id = ${user.id}`);
        account = account.rows[0];


        res.status(200).json({ message:"Done and Done", "user": user.name,"account": account.number});

    } catch (error) {

        console.log(error);

    }

});

router.post("/accountByNumber", async (req, res) => {

    try {
        const accountNumber = req.body.number;
                
        let account = await pool.query(`SELECT * 
                                        FROM accounts 
                                        WHERE number = ${accountNumber}`);
        account = account.rows[0];

        let user = await pool.query(`SELECT * 
                                        FROM users 
                                        WHERE id = ${account.user_id}`);
        user = user.rows[0];

        res.status(200).json({ message:"Done and Done", "user": user,"account": account});

    } catch (error) {

        console.log(error);

    }
});

module.exports = router;
const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const pool = require("../database");
const jwtController = require('jsonwebtoken');

//Checar Sessão Existente:
router.get("/checkSession", async (req, res) => {

    try {

        const token = req.cookies.token;        
        if (token === undefined) res.status(401).json({ auth:false , message:"Token não encontrada" });
        
        let user = await pool.query(`SELECT user_id 
                                       FROM sessions 
                                       WHERE jwt = '${token}'`);        
        if (user.rows[0] === {}) res.status(401).json({ auth:false , message:"Sessão não encontrada" });
        user = user.rows[0].user_id;

        const loggedUser = await pool.query(`SELECT * 
                                             FROM users 
                                             WHERE id = ${user}`)
        res.status(200).json({ auth:true , message:"Logged In", loggedUser: loggedUser.rows[0]});

    } catch (error) {

        console.log(error); 

    }

});

// Informações da Conta:
router.get("/account", async (req, res) => {

    try {

        const token = req.cookies.token;
        const user = jwtController.verify(token);
                
        let account = await pool.query(`SELECT * 
                                        FROM accounts 
                                        WHERE user_id = ${user}`);
        account = account.rows[0];
        res.status(200).json({ message:"Done and Done", account });

    } catch (error) {

        console.log(error); 

    }

});

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

        let user = await pool.query(`SELECT * 
                                    FROM users 
                                    WHERE CPF = ${cpf}`);
        user = user.rows[0];

        let account = await pool.query(`SELECT * 
                                        FROM accounts 
                                        WHERE user_id = ${user.id}`);
        account = account.rows[0];


        res.status(200).json({ message:"Done and Done", "user": user,"account": account});

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

// Informações das Transações:
router.get("/allStatements", async (req, res) => {
    try {
        const token = req.cookies.token;
        const user = jwtController.verify(token);

        let account = await pool.query(`SELECT id 
                                        FROM accounts 
                                        WHERE user_id = ${user.userID}`);
        account = account.rows[0];

        const transactions = await pool.query(`SELECT * 
                                               FROM transactions 
                                               WHERE sender_id = ${account} OR receiver_id = ${account}`);

        if (transactions.rows === []) res.status(401).json({ message:"Nenhuma transação realizada"});
        res.status(200).json({ message:"Done and Done", transactions: transactions.rows });

    } catch (error) {
        console.log(error); 
    }
});

router.get("/AllTransactions", async (req, res) => {
    try {
        const token = req.cookies.token;
        const user = jwtController.verify(token);

        let account = await pool.query(`SELECT id 
                                        FROM accounts 
                                        WHERE user_id = ${user.userID}`);
        account = account.rows[0];

        const transactions = await pool.query(`SELECT * 
                                               FROM transactions 
                                               WHERE sender_id = ${account};`);

        if (transactions.rows === []) res.status(401).json({ message:"Nenhuma transação realizada"});
        res.status(200).json({ message:"Done and Done", transactions: transactions.rows });

    } catch (error) {
        console.log(error); 
    }
});

//Informações do Cartão
router.get("/card", async (req, res) => {

    try {

        const token = req.cookies.token;
        const user = jwtController.verify(token);


        let card = await pool.query(`SELECT * 
                                        FROM cards 
                                        WHERE user_id = ${user.userID}`);
        card = account.rows[0];

        res.status(200).json({ message:"Done and Done", card: card });

    } catch (error) {

        console.log(error); 

    }

});


module.exports = router;
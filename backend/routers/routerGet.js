const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const pool = require("../database");
const jwtController = require('jsonwebtoken');

//Checar Sessão Existente:
router.get("/checkSession", (req, res) => {

    try {

        const token = req.cookies.token;             
        if (token === null) res.status(401).json({ auth:false , message:"Token não encontrada" });
        
        const user = await pool.query(`SELECT user_id 
                                       FROM sessions 
                                       WHERE jwt = ${token}`);
        if (user.rows[0] === {}) res.status(401).json({ auth:false , message:"Sessão não encontrada" });

        const loggedUser = await pool.query(`SELECT * 
                                             FROM users 
                                             WHERE id = ${user.rows[0]}`)
        res.status(200).json({ auth:true , message:"Logged In", loggedUser: loggedUser.rows[0]});

    } catch (error) {

        console.log(error); 

    }

});

// Informações da Conta:
router.get("/account", (req, res) => {

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

// Informações das Transações:
router.get("/allStatements", (req, res) => {
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

router.get("/AllTransactions", (req, res) => {
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
router.get("/card", (req, res) => {

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
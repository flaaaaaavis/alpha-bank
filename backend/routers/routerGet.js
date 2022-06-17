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
        const user = jwtController.verify(token, process.env.SECRET);
                
        let account = await pool.query(`SELECT * 
                                        FROM accounts 
                                        WHERE user_id = ${user.user_id}`);
        account = account.rows[0];
        res.status(200).json({ message:"Done and Done", account });

    } catch (error) {

        console.log(error);

    }

});

// Informações das Transações:
router.get("/transactions", async (req, res) => {
    try {
        const token = req.cookies.token;
        const user = jwtController.verify(token, process.env.SECRET);

        let account = await pool.query(`SELECT id 
                                        FROM accounts 
                                        WHERE user_id = ${user.user_id}`);
        account = account.rows[0];

        const transactions = await pool.query(`SELECT * 
                                               FROM transactions 
                                               WHERE sender_account = ${account.id} OR receiver_account = ${account.id}
                                               ORDER BY created_at`);
        if (transactions.rows[0] === undefined) res.status(401).json({ message:"Nenhuma transação realizada"});
        transactions.rows.forEach(element => {
            element.value = (element.sender_account === account.id)? parseFloat(element.value) * -1 : parseFloat(element.value)
        });

        res.status(200).json({ message:"Done and Done", transactions: transactions.rows });

    } catch (error) {
        console.log(error); 
    }
});

//Informações do Cartão
router.get("/card", async (req, res) => {

    try {

        const token = req.cookies.token;
        const user = jwtController.verify(token, process.env.SECRET);
        console.log(user)

        let card = await pool.query(`SELECT * 
                                        FROM cards 
                                        WHERE user_id = (${user.user_id})`);
        card = card.rows[0];

        res.status(200).json({ message:"Done and Done", card: card });

    } catch (error) {

        console.log(error); 

    }

});

//Informações do Usuário
router.get("/user", async (req, res) => {

    try {

        const token = req.cookies.token;
        const user = jwtController.verify(token, process.env.SECRET);

        let userData = await pool.query(`SELECT * 
                                        FROM users 
                                        WHERE id = (${user.user_id})`);
        userData = userData.rows[0];

        res.status(200).json({ message:"Done and Done", user: userData });

    } catch (error) {

        console.log(error); 

    }

});


module.exports = router;
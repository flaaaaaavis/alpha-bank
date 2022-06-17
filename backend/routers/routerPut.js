const EXPRESS = require("express");
const pool = require("../database");
const router = EXPRESS.Router();

router.put('/updateUser', async (req, res) => {
    let update;
    try {
        update = users.map(user => {
            if (user.id === req.body.id){
                user.name = req.body.name;
                user.CPF = req.body.CPF;
                user.uuid = req.body.uuid;
                user.bdate = req.body.bdate;
                user.password = req.body.password;
                console.log(user); 
                return user;
            }
            return user;
        })
    } catch (error) {
        res.status(400).send(error)
    } finally {
        users = update;
        res.sendStatus(200)
    }
});

router.put('/deposit', async (req, res) => {
    console.log(req.body);
    const { amount, account_number } = req.body;
 
    const balance = await pool.query(`SELECT balance FROM accounts WHERE number = (${account_number})`)
    let newBalance = parseFloat(amount) + parseFloat(balance.rows[0].balance);

    newBalance = await pool.query(`UPDATE accounts
                                   SET balance = ${newBalance}
                                   WHERE number = ${account_number}
                                   RETURNING balance`);
    res.status(200).json({message:`Deposito realizado, valor atual: ${newBalance.rows[0].balance}`})
 
});

router.put('/transaction', async (req, res) => {

    const { amount, sender_account, receiver_account } = req.body;

    try {

        const senderBalance = await pool.query(`SELECT balance 
                                                FROM accounts 
                                                WHERE number = (${sender_account})`);

        if (parseFloat(senderBalance.rows[0].balance) < parseFloat(amount)) {
            res.status(401).json({message: "Ladrão, ladrão, seu ladrãozinho"})
        }

        const receiverBalance = await pool.query(`SELECT balance FROM accounts WHERE number = (${receiver_account})`)
        let newReceiverBalance = parseFloat(amount) + parseFloat(receiverBalance.rows[0].balance);
        let newSenderBalance = parseFloat(senderBalance.rows[0].balance) - parseFloat(amount);

        newReceiverBalance = await pool.query(`UPDATE accounts
                                            SET balance = ${newReceiverBalance.toFixed(2)}
                                            WHERE number = ${receiver_account}
                                            RETURNING balance`);
        
        newSenderBalance = await pool.query(`UPDATE accounts
                                            Set balance = ${newSenderBalance.toFixed(2)}
                                            WHERE number = ${sender_account}
                                            RETURNING balance`)

        res.status(200).json({"message":`Transferido! Saldo atual: ${newSenderBalance.rows[0].balance}`})

    } catch (error) {
        console.log(error)
        res.sendStatus(401);
    }

})



module.exports = router;
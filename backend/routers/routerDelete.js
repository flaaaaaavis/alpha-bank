const express =  require('express')
const router = express.Router();
require("dotenv").config({ path: __dirname + "/../.env"});
const jwt = require('jsonwebtoken');
const { compare } = require('../src/hashController');

let users = [
    {
        "id": 1,
        "uuid": "d230dab8-854e-4e3b-9c54-77bb2780567a",
        "CPF": 12345678999,
        "name": 'John alguem',
        "bdate": 1980-07-06,
        "password": "um"
    },
    {
        "id": 2,
        "uuid": "79087000-068e-4d1a-9ee5-e85ae5e80782",
        "CPF": 09752564686,
        "name": 'Mary algo',
        "bdate": 1990-02-05,
        "password": "dois"
    },
    {
        "id": 3,
        "uuid": "690525bc-bdef-474c-a2ba-eabaefe603b3",
        "CPF": 35647964689,
        "name": 'Pedro tal',
        "bdate": 1992-05-01,
        "password": "tres"
    },
    {
        "id": 4,
        "uuid": "c5ab6436-8c0d-4576-a4de-0ee76f646a54",
        "CPF": 364736583658,
        "name": 'Joana um',
        "bdate": 1994-03-02,
        "password": "quatro"
    },
    {
        "id": 5,
        "uuid": "3cee5b16-2515-4ec2-9a19-ae3d0588efe7",
        "CPF": 74829583659,
        "name": 'Andre fulano',
        "bdate": 1997-03-05,
        "password": "cinco" 
    }
]

let accounts = [
    {
        "user_id": 4,
        "account_id": 1,
        "number": "05969-2",
        "balance": 45.23	
    },
    {
        "user_id": 3,
        "account_id": 2,
        "number": "1259065-2",
        "balance": 87.94
    },
    {
        "user_id": 5,
        "account_id": 3,
        "number": "1149302-X",
        "balance": 0.00
    },
    {
        "user_id": 2,
        "account_id": 4,
        "number": "534087-7",
        "balance": 1245.87
    },
    {
        "user_id": 1,
        "account_id": 5,
        "number": "1148547-7",
        "balance": 14021.48
    }
]

let cards = [
    {
        "account_id": 1,
        "card_id": 1,
        "number": "5538 9257 2516 5813",
        "expirity_date": "06/04/2023",
        "password": 448238,
        "SSID": 677
    },
    {
        "account_id": 2,
        "card_id": 2,
        "number": "5507 7950 0053 7698",
        "expirity_date": "06/07/2023",
        "password": 905730,
        "SSID": 443
    },
    {
        "account_id": 3,
        "card_id": 3,
        "number": "5523 1239 8248 4039",
        "expirity_date": "06/11/2023",
        "password": 325888,
        "SSID": 249
    },
    {
        "account_id": 4,
        "card_id": 4,
        "number": "5486 7403 0245 9543",
        "expirity_date": "06/07/2023",
        "password": 618076,
        "SSID": 399
    },
    {
        "account_id": 5,
        "card_id": 5,
        "number": "5595 2671 0490 5000",
        "expirity_date": "06/12/2022",
        "password": 007270,
        "SSID": 346
    }
]

router.put('/deleteUser', async (req, res) => {
    try {
        const sql = "UPDATE users SET deleted_by = $1, deleted_at = $2 WHERE user_id = $3;";
        const values = [req.body.deletedBy, req.body.deletedAt, req.body.id];
        await pool.query(sql, values);
        console.log("Remoção de usuário bem sucedida!");

        const sqlResult = "SELECT * FROM users WHERE deleted = $1;";
        const valuesResult = [false];
        const result = await pool.query(sqlResult, valuesResult);

        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }

    // let users2
    // try {
    //     users2 = users.map(user => {
    //         if(user.id === req.body.id) {
    //             user.deleted_by = req.body.deletedBy;
    //             user.deleted_at = req.body.deletedAt;
    //             console.log(user);
    //             return user;
    //         }
    //         return user;
    //     })
    // } catch (error) {
    //     res.status(400).send(error)
    // } finally {
    //     users = users2;
    //     res.sendStatus(200);
    // }
});

router.put('/deleteAccount', async (req, res) => {
    try {
        const sql = "UPDATE accounts SET deleted_by = $1, deleted_at = $2 WHERE account_id = $3;";
        const values = [req.body.deletedBy, req.body.deletedAt, req.body.id];
        await pool.query(sql, values);
        console.log("Deleção de conta bem sucedida!");

        const sqlResult = "SELECT * FROM accounts WHERE deleted = $1;";
        const valuesResult = [false];
        const result = await pool.query(sqlResult, valuesResult);

        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
    // let accounts2
    // try {
    //     accounts2 = accounts.map(account => {
    //         if(account.id === req.body.accountId) {
    //             account.deleted_by = req.body.deletedBy;
    //             account.deleted_at = req.body.deletedAt;
    //             console.log(account);
    //             return account;
    //         }
    //         return account;
    //     })
    // } catch (error) {
    //     res.status(400).send(error)
    // } finally {
    //     accounts = accounts2;
    //     res.sendStatus(200);
    // }
})

router.put('/deleteCard', async (req, res) => {
    try {
        const sql = "UPDATE cards SET deleted_by = $1, deleted_at = $2 WHERE card_id = $3;";
        const values = [req.body.deletedBy, req.body.deletedAt, req.body.id];
        await pool.query(sql, values);
        console.log("Deleção de cartão bem sucedida!");

        const sqlResult = "SELECT * FROM cards WHERE deleted = $1;";
        const valuesResult = [false];
        const result = await pool.query(sqlResult, valuesResult);

        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }

    // let cards2
    // try {
    //     cards2 = cards.map(card => {
    //         if(card.id === req.body.cardId) {
    //             card.deleted_by = req.body.deletedBy;
    //             card.deleted_at = req.body.deletedAt;
    //             console.log(card);
    //             return card;
    //         }
    //         return card;
    //     })
    // } catch (error) {
    //     res.status(400).send(error)
    // } finally {
    //     cards = cards2;
    //     res.sendStatus(200);
    // }
})

module.exports = router;
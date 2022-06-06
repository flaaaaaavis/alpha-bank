const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
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

router.put('/updateUser', async (req, res) => {
    let update;
    try {
        update = users.map(user => {
            console.log(user.id)
            console.log(req.body.id)
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

module.exports = router;
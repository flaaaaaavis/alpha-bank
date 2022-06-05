const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const jwt = require('jsonwebtoken');
const { compare } = require('../src/hashController');

router.put('/update/?user', (req, res) => {
    const users = getUsers()
        users.map(user => {
                if (user.id === req.params.id){
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user
        })
            // mensagem de sucesso 
            res.status(200).send('Alteração realizada com sucesso')
});

module.exports = router;




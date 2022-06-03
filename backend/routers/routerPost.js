const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const jwt = require('jsonwebtoken');
const { compare } = require('../src/hashController');

//Classe de Controle de Sessão
const session = require('../src/sessionController');

router.post('/login', (req, res) => {    

    const { login } = req.body;
    const { password } = req.body;    
        
    const users = JSONReader('users');
    const user = users.filter(element => element.login === login);
    
    if (compare(password, user[0].password)) {

        

        // Gerando Token        
        const loggedUser = user[0];
        const userToken = jwt.sign({ loggedUser }, process.env.SECRET);        

        // Gerando Sessão
        session.createSession(userToken, user[0]);

        // Gerando Cookie
        const thirtyDays = 1000 * 60 * 60 * 24 * 30;
        res.cookie("token", userToken , {maxAge: thirtyDays, path: '/'});

        // Enviando Resposta
        res.status(200).json({ auth: true , userToken });

    } else {

        res.status(401).json({ auth: false , message: "Wrong Password"});

    }

});

module.exports = router;
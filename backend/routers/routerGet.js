const EXPRESS = require("express");
const router = EXPRESS.Router();
require("dotenv").config({ path: __dirname+"/../.env"});

//Classe de Controle de Sessão
const session = require("../src/sessionController");

// Checar Sessão Existente
router.get("/checkSession", (req, res) => {

    try {

        const token = req.cookies.token;             
        if (token === null) res.status(401).json({ auth:false , message:"Token não encontrada" });

        const user = session.getSession(token);

        if (!user) res.status(401).json({ auth:false , message:"Sessão não encontrada" });

        res.status(200).json({ auth:true , user });

    } catch (error) {

        console.log(error); 

    }

});

module.exports = router;
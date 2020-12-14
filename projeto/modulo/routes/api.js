const express = require('express');
const bodyparse = require('body-parser');
const posts = require("../post");
const router = express.Router();

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getposts()))

})

router.post('/new', bodyparse.json(), (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;


    posts.newpost(nome, email, latitude, longitude);

    res.send("post adicionado")

})

module.exports = router;
const express = require('express');
const router = express.Router();

//listar
router.get('/', function (req, res) {
    res.send('usuario')
});


module.exports = router;
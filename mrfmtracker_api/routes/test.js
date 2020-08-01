var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('test is working properly');
});

module.exports = router;
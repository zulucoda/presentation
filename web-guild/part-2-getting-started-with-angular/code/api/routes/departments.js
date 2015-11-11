/**
 * Created by muzi on 2015/11/10.
 */
var express = require('express');
var router = express.Router();
var Department = require('../models/department');

/* GET home page. */
router.get('/', function (req, res, next) {

    Department.find(function (err, departments) {

        if (err)
            res.send(err);

        res.json(departments);
    });

});

module.exports = router;

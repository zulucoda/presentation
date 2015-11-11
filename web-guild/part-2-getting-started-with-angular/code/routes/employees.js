var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');
var errorHandler = require('../controller/generic-errors');

/* GET employees listing. */
router.get('/', function(req, res, next) {
  Employee.find(function (err, employees) {

    if (err)
      res.send(err);

    res.json(employees);
  });
});

router.post('/', function (req, res) {
  var employee = new Employee(req.body);

  employee.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(employee);
    }
  })
});

module.exports = router;

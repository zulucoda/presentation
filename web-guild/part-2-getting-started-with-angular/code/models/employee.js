/**
 * Created by muzi on 2015/11/11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    created_at: Date,
    updated_at: Date
});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
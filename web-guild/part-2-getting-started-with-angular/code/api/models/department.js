/**
 * Created by muzi on 2015/11/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    name: { type: String, required: true },
    created_at: Date,
    updated_at: Date
});

var Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
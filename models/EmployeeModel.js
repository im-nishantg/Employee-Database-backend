const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({

    name: String,
    age: Number,
    role: String,
    gender: String,
    email : String,
    mobile: Number
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;

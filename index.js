const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Employee = require( "./models/EmployeeModel.js");     // Employee model

require('dotenv').config()

app.use(express.json());
app.use(cors());

connection_url = "mongodb+srv://"+ process.env.DB_USERNAME +":" + process.env.PASSWORD + "@cluster0.roxgxmd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url);

app.get("/get", (req,res) =>{

    Employee.find({},(error, result) =>
    {
        if(error)
        {
            console.log(error);
        }

        else
        {
            res.send(result);
        }
    })
})

app.post("/create",(req,res) => {
    
    // console.log(req.body);
    const newEmployee = new Employee(req.body);

    newEmployee.save();
    res.send(newEmployee);
})

app.delete("/delete/:id",(req,res) => {

    // console.log(req.params.id);
    Employee.findByIdAndDelete(req.params.id, (err) => {
        if(err)
            console.log(error)
        else
            console.log("deleted successfully");
    })
    res.send("success");
} )

app.listen(process.env.PORT ||5000, (req,res)=>{
    console.log("server is up and running on port 5000.");
})
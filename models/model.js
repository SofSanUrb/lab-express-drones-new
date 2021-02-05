const mongoose = require('mongoose')

//create your schema here
let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

//create your model here
let DroneModel = mongoose.model('myDrone', DroneSchema)

// do not forget to export your model
module.exports = DroneModel
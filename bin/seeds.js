// Iteration #1
//1. Check if our database is connected
require('../configs/db.config.js')
const mongoose = require('mongoose')

//2. Require the model
let DroneModel = require('../models/model.js')

//3. Insert into the model
let dronesArr = [
    {name:'CovidDrone', propellers: 4, maxSpeed: 15},
    {name:'Biden 2.0', propellers: 5, maxSpeed: 18},
    {name:'zoomzoom', propellers: 4, maxSpeed: 19},
]
DroneModel.insertMany(dronesArr)
    .then((data) => {
        console.log('Data seeded' + data)
        //always close connection after seeding
        //please make sure you require mongoose at the top of the file
        mongoose.connection.close()
    })
    .catch(() => console.error())
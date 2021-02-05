const express = require('express');

// require the Drone model here

const router = express.Router();

//so first, require the model globally
let DroneModel = require('../models/model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((result) => {
      res.render('./drones/list.hbs', {result})
    })
    .catch(() => {
      console.error();
    })  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {myName, myProp, myMax} = req.body
  let myNewDrone = {
    name: myName,
    propellers: myProp,
    maxSpeed: myMax
  }

  DroneModel.create(myNewDrone)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      console.error();
      res.render('./drones/create-form.hbs')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id

  DroneModel.findById(id)
    .then((drone) => {
      res.render('./drones/update-form.hbs', {drone})
    })
    .catch(() =>{
      console.log('Editing failed!')
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id

  const {myName, myProp, myMax} = req.body
  let UpdatedDrone = {
    name: myName,
    propellers: myProp,
    maxSpeed: myMax
  }

  DroneModel.findByIdAndUpdate(id, UpdatedDrone)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((drone) => {
      res.render('./drones/update-form.hbs', {drone})
    })

});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.id

  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(() => {
      console.log('Delete failed')
    })
});

module.exports = router;

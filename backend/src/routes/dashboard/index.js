const router = require('express').Router()

const {auth} = require('../../auth/index')
const {VehicleModel} = require('../../model/Vehicle')


//POST NEW VEHICLE
router.post('/', auth, (req, res, next) => {
    const {name, reg, make, model, mileage} = req.body
    const newVehicle = new VehicleModel({
        name,
        registration: reg,
        make,
        model,
        mileage,
        user: req.userId
    })
    newVehicle.save((err, product) => {
        if (err) {
            return res.status(403).json(err)
        }
        console.log('Vehicle saved')
        res.status(200).json(product)
    })
})


//GET ALL VEHICLES
router.get('/', auth, async (req, res, next) => {
    const vehicles = await VehicleModel.find({
        user: req.userId
    })
    if (!vehicles) {
        console.log('No vehicles found')
        return res.json('no vehicles')
    }
    return res.status(200).json(vehicles)
})


module.exports = {
    dashBoardRoute: router
}
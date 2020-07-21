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
            console.log(err)
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


//DELETE VEHICLE
router.delete('/:id', auth, (req, res) => {
    VehicleModel.findByIdAndDelete(req.params.id, (err, product) => {
        if (err) {
            console.log(err)
            res.status(403).json(err)
        }
        console.log('Vehicle deleted')
        return res.status(200).json('deleted')
    })
})


//EDIT VEHICLE
router.patch('/:id', auth, (req, res) => {
    console.log(req.body.data)
    VehicleModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        registration: req.body.registration,
        mileage: req.body.mileage
    }, (err, product) => {
        if (err) {
            return console.log(err)
        }
        console.log(product)
        return res.status(200).json('success')
    })
})


module.exports = {
    dashBoardRoute: router
}
const mongoose = require('mongoose')


const vehicleSchema = mongoose.Schema({
    name: {
        type: String
    },
    registration: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    mileage: {
        type: Number
    },
    user: {
        type: String
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpensesModel'
    }]
})

const expensesSchema = mongoose.Schema({
    name: {
        type: String,
    },
    value: {
        type: Number
    },
    description: {
        type: String
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VehicleModel'
    }
})


const VehicleModel = mongoose.model('Vehicle', vehicleSchema)
const ExpensesModel = mongoose.model('Expenses', expensesSchema)


module.exports = {
    VehicleModel,
    ExpensesModel
}
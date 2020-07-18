const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VehicleModel'
    }]
})

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
})


userSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 8, (err, hash) => {
        if (err) {
            return console.log('Unable to hash user password')
        }
        user.password = hash
        next()
    })
})



const VehicleModel = mongoose.model('Vehicle', vehicleSchema)
const UserModel = mongoose.model('User', userSchema)


module.exports = {
    VehicleModel,
    UserModel
}
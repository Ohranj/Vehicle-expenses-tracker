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


const UserModel = mongoose.model('User', userSchema)


module.exports = {
    UserModel
}
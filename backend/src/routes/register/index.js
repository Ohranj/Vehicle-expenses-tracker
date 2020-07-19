const router = require('express').Router()
const {UserModel} = require('../../model/User')


//POST NEW REGISTER USER REQUEST
router.post('/', async (req, res) => {
    const {email, password, firstname, surname} = req.body
    const newUser = new UserModel({
        email,
        password,
        firstname,
        surname
    })
    await newUser.save((err, product) => {
        if (err) {
            return console.log('error in saving user')
        }
        console.log('User saved')
        return res.status(200).json(product)
    })
})


module.exports = {
    registerRoute: router
}
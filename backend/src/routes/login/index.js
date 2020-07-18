const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const {UserModel} = require('../../model/index')



//POST USER LOGIN REQUEST
router.post('/', async (req, res, next) => {
    const {email, password} = req.body
    const checkUserExists = await UserModel.findOne({email})
    if (!checkUserExists) {
        console.log('Login error - No user found')
        return res.status(403)
    }
    const checkPasswordsMatch = await bcrypt.compare(password, checkUserExists.password)
    if (!checkPasswordsMatch) {
        console.log('Login error - User details do not match')
        return res.status(403).json('error')
    }
    const token = jwt.sign({
        id: checkUserExists._id.toString()
    }, process.env.JWTKEY, {
        expiresIn: '1h'
    })
    console.log('Login success - Token issued')
    return res.status(200).json({token})
})


module.exports = {
    loginRoute: router
}
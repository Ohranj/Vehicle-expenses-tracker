const router = require('express').Router()

const {auth} = require('../../auth/index')


//POST NEW VEHICLE
router.post('/', auth, (req, res, next) => {
    console.log(req.body)
    console.log(req.userId)
})


module.exports = {
    dashBoardRoute: router
}
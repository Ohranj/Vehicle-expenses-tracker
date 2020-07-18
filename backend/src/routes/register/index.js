const router = require('express').Router()


//POST NEW REGISTER USER REQUEST
router.post('/', (req, res) => {
    const {email, password, firstname, surname} = req.body
    res.status(200).json('ok')
})


module.exports = {
    registerRoute: router
}
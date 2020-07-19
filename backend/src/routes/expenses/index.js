const router = require('express').Router()


//POST NEW EXPENSE
router.post('/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
})


module.exports = {
    expensesRoute: router
}
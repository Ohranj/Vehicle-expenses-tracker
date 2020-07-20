const router = require('express').Router()
const {auth} = require('../../auth/index')
const {VehicleModel, ExpensesModel} = require('../../model/Vehicle')


//POST NEW EXPENSE
router.post('/:id', auth, async (req, res) => {
    const newExpense = new ExpensesModel ({
        name: req.body.expenseName,
        value: req.body.expenseValue,
        description: req.body.expenseDesc,
        date: req.body.expenseDate
    })
    VehicleModel.findById(req.params.id, (err, product) => {
        if (err) {
            return console.log(err)
        }
        product.expenses.push(newExpense)
        product.save((err, product) => {
            if (err) {
                return console.log(err)
            }
            return res.json(product)
        })
    })
})





module.exports = {
    expensesRoute: router
}
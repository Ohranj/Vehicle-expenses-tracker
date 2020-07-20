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
        product.save((err) => {
            if (err) {
                return console.log(err)
            }
            return res.json(newExpense)
        })
    })
})


//GET ALL EXPENSES
router.get('/:id', auth, (req, res) => {
    VehicleModel.findById(req.params.id, (err, vehicle) => {
        if (err) {
            console.log(err)
            return res.status(403).json(err)
        }
        return res.status(200).json(vehicle.expenses)
    })
})





module.exports = {
    expensesRoute: router
}
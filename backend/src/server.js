const express = require('express')
const cors = require('cors')

require('./database/mongoConnect')

const {registerRoute} = require('./routes/register/index')
const {loginRoute} = require('./routes/login/index')
const {dashBoardRoute} = require('./routes/dashboard/index')
const {expensesRoute} = require('./routes/expenses/index')


const app = express()
const PORT = 8080

app.use(cors({
    origin: true,
    methods: 'GET, POST, PATCH, DELETE, PUT',
    allowedHeaders: 'Content-Type, Authorization'
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))



//REGISTER ROUTES
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/dash', dashBoardRoute)
app.use('/expenses', expensesRoute)


//RUN SERVER
app.listen({
    host: 'localhost',
    port: PORT
}, () => console.log(`Server running on localhost:${PORT}`))
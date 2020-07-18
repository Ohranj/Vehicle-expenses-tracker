const mongoose = require('mongoose')

require('dotenv').config()


const DBNAME = process.env.DBNAME
const DBPASSWORD = process.env.DBPASSWORD
const DBURL = `mongodb+srv://ajdorrington:${DBPASSWORD}@cluster0.r6ggp.mongodb.net/${DBNAME}?retryWrites=true&w=majority`


mongoose.connect(DBURL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err))
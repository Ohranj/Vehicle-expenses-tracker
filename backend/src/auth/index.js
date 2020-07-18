const jwt = require('jsonwebtoken')

require('dotenv').config()


const auth = (req, res, next) => {
    const token = req.get('Authorization').split(' ')[1]
    let decodedToken = jwt.verify(token, process.env.JWTKEY)
    if (!decodedToken) {
        return console.log('Error - invalid token')
    }
    req.userId = decodedToken.id
    next()
}


module.exports = {
    auth
}
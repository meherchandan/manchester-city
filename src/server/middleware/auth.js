const jwt = require('jsonwebtoken')
const Users = require('../db/models/Users')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const useremail = await Users.findOne({ useremail: data.email, 'tokens.token': token })
        if (!useremail) {
            throw new Error()
        }
        req.user = useremail
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth
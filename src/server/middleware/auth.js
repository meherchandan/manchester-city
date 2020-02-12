const jwt = require('jsonwebtoken')
const Users = require('../db/models/Users')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')

    if (token.includes('null')) {
       return res.status(401).send({ error: 'Not authorized to access this resource' })
    }
    const data = await jwt.verify(token, process.env.JWT_KEY);
    if(!data.email){
        res.status(401).send({ error: 'Not authorized to access this resource' })

    }
    try {
        const user = await Users.query().findOne({ useremail: data.email})
        if (!user) {
            throw new Error()
        }
        const passwordValid = await user.verifyPassword(data.password);
        if(!passwordValid){
            throw new Error();
        }
        req.user = user.useremail
        req.token = token
        next()
    } catch (error) {
        console.log("error occured")
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth
const Credentials = require("./auth.controller");
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config').api.jwtSecret


const getUserByEmail = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        Credentials(email, password)
            .then(data => {
                if (data) {
                    const token = jwt.sign({
                        id: data.id,
                        email: data.id,
                        role: data.role
                    }, jwtSecret)
                    res.status(200).json({ data, token })
                }
                else {
                    res.status(401).json({ message: "Email or Password is wrong" })
                }
            })
            .catch(err => res.status(400).json({ message: err.message }))
    }
    else {
        res.status(400).json({
            message: "Incomplete data", fields: {
                email: 'STRING',
                password: 'STRING'
            }
        })
    }
}

module.exports = getUserByEmail
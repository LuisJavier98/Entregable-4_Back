const getUserByEmail = require("./auth.services");
const router = require('express').Router()

router.post('/login', getUserByEmail)

module.exports = router

const passport = require('passport')
const { findUserById } = require('../users/users.controllers')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtSecret = require('../../config').api.jwtSecret



const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await findUserById(jwt_payload.id)
        if (!user) {
            return done(null, false)
        }
        else {
            return done(null, jwt_payload)
        }
    } catch (error) {
        return done(error, false)
    }
}))


module.exports = passport
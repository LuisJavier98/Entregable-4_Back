const { findUserByEmail } = require("../users/users.controllers");
const { compare } = require("../utils/crypto");


const Credentials = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        if (compare(password, user.password)) {
            return user
        }
        else {
            return null
        }

    } catch (error) {
        return null
    }
}
module.exports=Credentials



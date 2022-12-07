const bcrypt = require('bcrypt');


const hash = (myPlaintextPassword) => bcrypt.hashSync(myPlaintextPassword, 10);
const compare = (myPlaintextPassword, hash) => bcrypt.compareSync(myPlaintextPassword, hash)

module.exports = {
    hash,
    compare
}
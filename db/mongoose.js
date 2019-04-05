const mongoose = require('mongoose');
const {dbPass, dbUser} = require('../config');
mongoose.Promise = global.Promise;

mongoose
    .connect(`mongodb://${dbUser}:${dbPass}@ds133158.mlab.com:33158/registration-ui`)
    .then(()=>console.log('DB Connected'))
    .catch(err=>console.log(err))

module.exports = mongoose;
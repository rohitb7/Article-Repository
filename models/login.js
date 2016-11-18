var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    id: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


var Login = module.exports = mongoose.model('Login',loginSchema);


//Get Article By Id

module.exports.getLoginById = function(id, callback) {
    Login.findById(id, callback);
}
'use strict';

var mongoose = require('mongoose');

var addressModel = function () {
    var addressSchema = new mongoose.Schema({
        id: { type: String, unique: true }, // phonenumber used here
        address: String
    });
    return mongoose.model('Address', addressSchema);
};

module.exports = new addressModel();

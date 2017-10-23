'use strict';

var Address = require('../../models/address');

exports.get = function (req, res) {
    var id = req.params.id.toString();
    Address.findOne({ id: id}, function(err, address) {
        if(err || !address) {
            console.error('Error finding address: ', err);
            return res.status(404).send(err);
        }
        return res.status(200).send(address);
    });
};

exports.put = function (req, res) {
    var id = req.id;
    var address = new Address();
    address.id = req.id;
    address.address = req.body.address;
    address.save(function(err) {
        if(err)
            console.error('failed saving address ', err);
    });

    return res.status(200)
    .send({message: id});
};
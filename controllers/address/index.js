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
    var id = req.params.id;
    Address.findOne({ id: id}, function(err, address) {
        if(err || !address) {
            address = new Address();
            address.id = id;
        }
        console.log(req.body);
        console.log(req.body.address);
        address.address = req.body.address;
        address.save(function(err) {
            if(err)
                console.error('failed saving address ', err);
        });
    });
    return res.status(200)
    .send({message: id});
};
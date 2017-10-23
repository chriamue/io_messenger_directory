var mongoHost = process.env.MONGOHOST || 'localhost';
var serverPort = process.env.PORT || 8000;
var serverHost = process.env.HOST || '0.0.0.0';

module.exports = {
    mongourl: 'mongodb://' + mongoHost + '/io_messenger_dir',
    serverPort: serverPort,
    serverHost: serverHost
};

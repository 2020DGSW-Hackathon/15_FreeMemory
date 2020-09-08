const api = require('express').Router();

api.use('/auth', require('./auth'));
api.use('/member', require('./member'));
api.use('/schedule', require('./schedule'));

module.exports = api;
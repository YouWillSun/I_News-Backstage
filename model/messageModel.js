var mongoose = require('mongoose');

var messageSchema = require('../schemas/messageSchema.js');

var message = mongoose.model('message', messageSchema);

module.exports = message;
"use strict";

const mongoose = require('mongoose');

// Define the message schema

const MessageSchema  = new mongoose.Schema({
    poster: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    }
});

MessageSchema.set('versionKey', false);
MessageSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Message', MessageSchema);
"use strict";

const mongoose = require('mongoose');

const MessageSchema = require('../message');

// Define the user schema

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    eMail: {
        type: String,
        required: true,
        unique: true
    },

    isRestaurant: {
        type: Boolean,
        default: false
    },

    premiumAccount: {
        type: Boolean,
        default: false
    },
    expirationPremiumAccount: Date,
    privateMessagesSent: [MessageSchema],
    privateMessagesReceived: [MessageSchema]
});

UserSchema.set('versionKey', false);

// Export the User model
module.exports = mongoose.model('User', UserSchema);
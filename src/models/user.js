"use strict";

const mongoose = require('mongoose');

// Define the user schema

//// Define private message schema
const PrivateMessageSchema  = new mongoose.Schema({
    poster: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

PrivateMessageSchema.set('versionKey', false);
PrivateMessageSchema.set('timestamps', true);

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
    privateMessagesSent: [PrivateMessageSchema],
    privateMessagesReceived: [PrivateMessageSchema]
});

UserSchema.set('versionKey', false);

// Export the User model
module.exports = mongoose.model('User', UserSchema);
"use strict";

const mongoose = require('mongoose');

const MessageSchema = require('../message');

// Define the group schema
const GroupSchema  = new mongoose.Schema({

    owner : {
        type: Schema.Types.ObjectId,
        required: true
    },

    dateFrom: {
        type: Date,
        required: true
    },
    dateTo: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    maxMembers: {
        type: Number,
        required: true
    },

    members: [Schema.Types.ObjectId],

    posts: [MessageSchema]
});

GroupSchema.set('versionKey', false);
GroupSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Group', GroupSchema);
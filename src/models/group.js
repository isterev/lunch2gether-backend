"use strict";

const mongoose = require('mongoose');

// Define the group schema

//// Define the group message schema
const GroupMessageSchema  = new mongoose.Schema({
    poster: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

GroupMessageSchema.set('versionKey', false);
GroupMessageSchema.set('timestamps', true);


const GroupSchema  = new mongoose.Schema({

    owner : {
        type: mongoose.Schema.Types.ObjectId,
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

    members: [mongoose.Schema.Types.ObjectId],

    posts: [GroupMessageSchema]
});

GroupSchema.set('versionKey', false);
GroupSchema.set('timestamps', true);


// Export the Group model
module.exports = mongoose.model('Group', GroupSchema);
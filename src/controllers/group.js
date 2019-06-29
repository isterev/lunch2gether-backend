"use strict";

const GroupModel = require('../models/group');


const create = (req, res) => {

    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    GroupModel.create(req.body)
        .then(group => res.status(201).json(group))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    GroupModel.findById(req.params.id).exec()
        .then(group => {

            if (!group) return res.status(404).json({
                error: 'Not Found',
                message: `Group not found`
            });

            res.status(200).json(group)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    GroupModel.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true}).exec()
        .then(group => res.status(200).json(group))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    GroupModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Group with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {

    GroupModel.find({}).exec()
        .then(groups => res.status(200).json(groups))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const listMyGroups  = (req, res) => {

    GroupModel.find({ $or: [ { owner: req.params.id }, { members: req.params.id }] }).exec()
        .then(groups => res.status(200).json(groups))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    create,
    read,
    update,
    remove,
    list,
    listMyGroups
};
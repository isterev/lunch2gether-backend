"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const GroupController = require('../controllers/group');


router.get('/', GroupController.list); // List all groups
router.post('/', middlewares.checkAuthentication, GroupController.create); // Create a new group
router.get('/:id', GroupController.read); // Read a group by Id
router.put('/:id', middlewares.checkAuthentication, GroupController.update); // Update a group by Id
router.delete('/:id', middlewares.checkAuthentication, GroupController.remove); // Delete a group by Id
router.get('/myGroups/:id', middlewares.checkAuthentication, GroupController.listMyGroups); // List all my groups


module.exports = router;
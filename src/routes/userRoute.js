// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../contorller/userContoller');

// Define routes
router.get('/', userController.getAllUsers);
router.post('/add', userController.createUser);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;
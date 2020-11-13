const express = require('express');
const userControllers = require('../controllers/usersControllers');
const route = express.Router();

route.get('/users',userControllers.getUsers);

route.post('/users',userControllers.postUsers);

route.get('/users/:userId',userControllers.getUserById);

route.patch('/users/:userId',userControllers.updateUserById);

route.delete('/users/:userId',userControllers.deleteUserById);

module.exports = route;


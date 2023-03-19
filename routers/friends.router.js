const express = require('express');

const friendsController = require('../controllers/friends.controller');

//create new router
const friendsRouter = express.Router();

//create custom middleware
friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
})

//routes handlers
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
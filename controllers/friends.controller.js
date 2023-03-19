
const model = require('../models/friends.model');

function getFriends(req, res) {
    res.json(model);
}

function postFriend(req, res) {
    console.log('rb',req.body)
    if(!req.body.name){
        //bad request. should return 
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    
    const newFriend = {
        id: model.length,
        name: req.body.name
    };
    model.push(newFriend);

    res.json(newFriend);
}

function getFriend(req, res) {
    //this is a str and we need to convert to number
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if(friend){
        //express default to sending 200
        res.json(friend);
    } 
    else {
        //always return json even if it's an error
        res.status(404).json({
            error: 'friend not exist'
        });
    }
}

module.exports = {
    getFriends,
    getFriend,
    postFriend
}
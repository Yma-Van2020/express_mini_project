const path = require('path');

//writing this way for debugging purposes
function getMessages(req, res) {
    //requires an absolute path, so we use path.join
    //use sendFile to send image
    // res.sendFile(path.join(__dirname, '..',  'public', 'images', 'photo-1551698618-1dfe5d97d256.png'));
    res.render('messages', {
        title: 'messages to my frineds!',
        friend: 'Elon Musk'
    })
}

function postMessages(req, res) {
    console.log('updating messages');
}

//to access from server.js we need to export
module.exports = {
    getMessages,
    postMessages
}
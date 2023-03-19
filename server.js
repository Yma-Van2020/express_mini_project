const express = require('express'); //import express package
const friendsRouter = require('./routers/friends.router');
const path = require('path');
const messagesRouter = require('./routers/messages.router');

//set up the application using the express fn 
const app = express();

//set view engine to handlebar
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    //the flow returns back to middle ware
    const delta = Date.now() - start;
    console.log(delta)
})

//used to serve static files 
app.use('/site', express.static(path.join(__dirname, 'public')));

//parses the request body as JSON and populates the req.body object with the parsed data
app.use(express.json());

//render view in the index file
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends are very clever',
        caption: 'Let\'s go skiing'
    })
})

//mounting the routers on the app object
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

//set the port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
const express = require('express);

const server = express(); //creates a variable called server that calls the express function

server.listen(3000);//causes the server to run on port 3000 of your localhost: 3000

//ctrl+s = save
//creation of application route by the method GET

const express = require('express');

const server = express();//creates a variable called server that calls the express function

server.get('/teste', () => {
    console.log('teste');
})//Create the route / test with the GET method, console.log will return in the 'test' terminal if it has been successfully executed.

server.listen(3000);//causes the server to run on port 3000 of your localhost: 3000

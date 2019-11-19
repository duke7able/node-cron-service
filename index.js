
const cronJobs = require('./cron-jobs/cronJobs.service')
/**
 * This code is not for cron job, it is for creating a basic web server
 * NOTE : we have not used any routing management lib or package like express or hapi. This is just plain node
 */
const http = require('http')

//create a server object:
http.createServer(function (req, res) {
    console.log('request recieved !!')
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8000); //the server object listens on port 8080
cronJobs.start()
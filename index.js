// import the json library using require
const jsonsrvr = require('json-server')

//create server using create function
const mediaPlayerServer = jsonsrvr.create()

//create path for database.json file
const router = jsonsrvr.router('database.json')

//create middleware to convert json to js
const middleware = jsonsrvr.defaults()

//Connect
mediaPlayerServer.use(middleware)                   //server can use middleware          middleware should be in first
mediaPlayerServer.use(router)                       //server can use router

//Setup port for the server
const port = 5000 || process.env.PORT                //process.env.PORT  is for choosing other port in case of coinsidence


//run the server

mediaPlayerServer.listen(port,()=>{
    console.log("media player server is running successfully");
})

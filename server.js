//to use absolute path
require("app-module-path").addPath(`${__dirname}/src`);

//setup the server
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 5000;

const server = http.createServer(app); //create the server

console.log(`run the app on http://localhost:${port}`);

server.listen(port);

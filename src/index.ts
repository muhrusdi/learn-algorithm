import http from "http";
import app from "./app"

//create a server object:
app()

http
  .createServer(function(req, res) {
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

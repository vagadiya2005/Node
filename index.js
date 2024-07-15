const express = require("express");
const EventEmiter = require("events");
const app = express();

const event = new EventEmiter();

let count = 0;

event.on("apicalled", () => {  // when event occure then execute this code.
    
  count++;
  console.log("api called", count); 
});

app.get("/root", (req, res) => {
  res.send("root api");
  event.emit("apicalled");  // creating event which handle by event.on()
});

app.get("/upload", (req, res) => {
  res.send("upload api");
  event.emit("apicalled");
});

app.get("/abou", (req, res) => {
  res.send("about api");
  event.emit("apicalled");
});

app.listen(5600);

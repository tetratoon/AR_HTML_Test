console.log("Hello World!");
const express = require('express');
const server = express();

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

server.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
 });

 server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index1.html');
 });

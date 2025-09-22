// Server.js is to configure the server and then export it for use in other code
// Other code = testing, or running the server, but never both at the same time

console.log("Hello World")

// Import the package
const express = require('express')
// Make an instance of an express server
const app = express();

// Enable processing of body content on incoming web requests
// JSON is raw body JSON content
// For express, this line must be stated, unlike with flask.
app.use(express.json());
// URL Encoded is typically from a form, like a <form></form>
app.use(express.urlencoded({extended: true}));

// Configure the server to respond to GET "/" endpoint requests
app.get('/', (req, res) => {
    // Send back some HTML content
    // res.send("<h1>Hello World!</h1>");
    res.json({
        message: "hello, world."
    });
});

app.post("/", (request, response) => {
    console.log(request.body);
    if (!request.body || request.body.message == undefined){
        return response.status(401).json({error:"Invalid request."})
    }

    let repeatedWord = request.body.message;

    response.json({
        message: repeatedWord + repeatedWord + repeatedWord
    });
});

module.exports = {
    app
}
// Index.js just runs the server for dev or production, but NEVER for testing

const {app} = require("./server.js");

require("dotenv").config();

// Grab the port number from env variable or use a hardcode fallback value
const port = process.env.PORT || 3000;
console.log("Environment variable for PORT is: " + process.env.PORT);

// Start the server, allow it to lsiten to web traffic on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
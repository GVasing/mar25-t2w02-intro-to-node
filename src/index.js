// Index.js just runs the server for dev or production, but NEVER for testing

const {app} = require("./server.js");
const { dbConnect } = require("./utils/database.js");

require("dotenv").config();

// Grab the port number from env variable or use a hardcode fallback value
// const port = process.env.PORT || 3000;
const port = 3000;
console.log("Environment variable for PORT is: " + process.env.PORT);

dbConnect().then(() => {
    // Start the server, allow it to listen to web traffic on the specified port
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});

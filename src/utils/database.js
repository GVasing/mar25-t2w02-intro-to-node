// Databse-related utilities
// such as connecting, disconnecting, seeding, and deleting from the database

const { default: mongoose } = require("mongoose");

async function dbconnect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SuperCoolExampleDatabase");
        console.log("Database Conencted.");
    } catch (error) {
        console.log("Database Connection Failed.\n" + JSON.stringify(error));
    }
}

async function dbClose() {
    await mongoose.connection.close();
    console.log("Database Disconnected");
}

dbconnect();
dbClose();
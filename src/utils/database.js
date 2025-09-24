// Databse-related utilities
// such as connecting, disconnecting, seeding, and deleting from the database

const { default: mongoose } = require("mongoose");
const { Book } = require("../models/BookModel");

async function dbConnect(){
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


async function dbSandbox(){
    await dbConnect();

    let hgtth = new Book({
        title: "Hitchhikers Guide To The Galaxy",
        author: [
            "Douglas Adams"
        ],
        series: "Hitchhikers Guide To The Galaxy"
    });

    await hgtth.save();
    console.log(hgtth);

    await dbClose();
}

module.exports = {
    dbConnect, dbClose
};

// dbSandbox();
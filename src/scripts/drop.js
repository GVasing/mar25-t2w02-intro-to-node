const { default: mongoose } = require("mongoose");
const { dbConnect, dbClose } = require("../utils/database");

async function drop(){
    await dbConnect();
    await mongoose.connection.dropDatabase();
    console.log("Database Dropped.")
    await dbClose();
}

drop();
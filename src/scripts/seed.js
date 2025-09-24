const { Book } = require("../models/BookModel");
const { dbConnect, dbClose } = require("../utils/database");


async function seed() {
    // 1. Connect to Database
    await dbConnect();

    // 2. Start seeding to database
    let booksData = [{
        title: "Hitchhikers Guide To The Galaxy",
        author: [
        "Douglas Adams"
        ],
        series: "Hitchhikers Guide To The Galaxy"
    },
    {
        title: "Generic Book",
        author: [
        "Generic Author"
        ],
        series: "Generic Series of Generic Books"
    }
    ];

    let seedResult = await Book.insertMany(booksData);

    console.log(seedResult);

    // 3. Disconnect from Database
    await dbClose();
}

// 4. Run function
seed();
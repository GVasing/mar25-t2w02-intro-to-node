const { Author } = require("../models/authorModel");
const { Book } = require("../models/BookModel");
const { dbConnect, dbClose } = require("../utils/database");


async function seed() {
    // 1. Connect to Database
    await dbConnect();

    // 2. Start seeding to database

    let authorsData = [
        {
            name: "Douglas Adams",
            bio: "Real funny sci-fi author"
        },
        {
            name: "Generic Author"
        }
    ]

    let authorSeedResult = await Author.insertMany(authorsData);

    let douglasAdams = await Author.findOne({name:"Douglas Adams"});
    let genericAuthor = await Author.findOne({name:"Generic Author"});

    let booksData = [{
        title: "Hitchhikers Guide To The Galaxy",
        author: [
            douglasAdams.id
        ],
        isbn: ["bananas", "bananas2"],
        series: "Hitchhikers Guide To The Galaxy"
    },
    {
        title: "Generic Book",
        author: [
            genericAuthor.id
        ],
        isbn: ["mango"],
        series: "Generic Series of Generic Books"
    },
    ];

    let seedResult = await Book.insertMany(booksData);

    console.log(seedResult);

    // 3. Disconnect from Database
    await dbClose();
}

// 4. Run function
seed();
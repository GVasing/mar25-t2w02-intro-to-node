const express = require("express");
const { Book } = require("../models/BookModel");
const { Author } = require("../models/authorModel");
const router = express.Router();

// GET all books from the database
router.get("/", async (request, response) => {
    let results = await Book.find();

    // Add author data for all authors referenced in each book document
    await Book.populate(results, {path: "author"});

    response.json({
        data: results
    });
});

// GET one book by ID
// http://localhost:3000/books/id/fadfsdagsagsrg
router.get("/id/:id", async (request, response) => {
    let results = await Book.findById(request.params.id);
    response.json({
        data: results
    });
});

// GET book by search query
// http://localhost:3000/books/search?title=bananas&author=Some%20Random%20Dude
router.get("/search", async (request, response) => {

    console.log(request.query);

    let results = await Book.find(request.query);

    response.json({
        message: "search endpoint activated.",
        queryData: request.query,
        data: results
    });

    // let results = await Book.findById(request.params.id);
    // response.json({
    //     data: results
    // });
});

// POST to make book
router.post("/", async (request, response) => {

    // To clone object
    let readyToUseData = {...request.body};
    // OR
    // More comprehensive way to clone object at various nested depths
    // let readyToUseData = JSON.parse(JSON.stringinfy(request.body));

    if (readyToUseData.title && typeof readyToUseData != "string"){
        readyToUseData.title = readyToUseData.title.toString();
    }

    let results = await new Book(readyToUseData).save();

    response.json({
        results: results
    })
});

// PATCH to partially update existing book
router.patch("/", async (request, response) => {

    let results = null;

    response.json({
        results: results
    })
});

// DELETE to remove book
router.delete("/", async (request, response) => {
    // let results = await Book.deleteOne;
    
    response.json({
        results: results
    })
});


module.exports = router;
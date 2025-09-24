const { default: mongoose } = require("mongoose");

const BookSchema = new mongoose.Schema({
        // Model properties
        title:{
            type: String,
            required: true
            // unique: true
        },
        isbn: [{
            type: String,
            unique: true
        }],
        author: [{
            type: mongoose.Types.ObjectId,
            ref: "Author"
        }],
        series: String        
});



const Book = mongoose.model(
    // Model name
    "Book", 
    
    // Model Schema
    BookSchema

);

// const Book = mongoose.model("Book", BookSchema)

module.exports = {
    Book, // Model
    BookSchema  // Schema
};

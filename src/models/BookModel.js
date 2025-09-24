const { default: mongoose } = require("mongoose");

const Book = mongoose.model(
    // Model name
    "Book", 
    
    // Model properties
    {
        title:{
            type: String,
            required: true
        },
        isbn: [String],
        author: [String],
        series: String        
    }
);

module.exports = {
    Book
};


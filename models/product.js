const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
        require: true
        
    },
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true

    },
    description: {
        type: String
    }
});
module.exports = mongoose.model("article", articleSchema);
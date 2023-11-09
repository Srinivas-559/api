require("dotenv").config()
const connectDB = require('./db/connect');
const Article = require("./models/product");



const ArticleJson = require("./Articles.json");


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Article.deleteMany({})
        await Article.create(ArticleJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
    

}
start();
require("dotenv").config()
const express = require("express");
const productRoutes = require("./routers/product");
const connectDB = require("./db/connect");

const app = express()
const PORT = process.env.PORT || 3000;
app.use("/api/products",productRoutes);

app.get("/", (req, res) => {
    res.send("Hi i am live .")
});

const start = async () => { 
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am connected`); 
        });
        
    } catch (error){
        console.log(error);
    }
}
start();
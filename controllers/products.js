const Article = require("../models/product")
const getAllProducts = async (req, res) => {
    const myData = await Article.find({})
    res.status(200).json({ myData });
 }
const getAllProductsTesting = async (req,res) => {
    res.status(200).json({ msg:"hi I am getAllProducts Testing "})
}


module.exports = { getAllProducts, getAllProductsTesting };
import express from "express"
import {scraper} from "./scrapes/amazonRoute.js";

const app = express();
app.use(express.json());


app.get('/query/amazon/:name', async (req, res) => {
    const productName = req.params.name;
    const amazonSearchArray = await scraper(productName);
    if (amazonSearchArray.length > 0) {
        res.json(amazonSearchArray);
    } else {
        res.status(404).send("Product not found or please provide product name");
    }
});


app.get('/', (req, res) => {
    res.json("Ecommerce scraper");
});

const PORT = 5000; 
app.listen(PORT, () => { console.log(`server running @ port : ${PORT}`) })
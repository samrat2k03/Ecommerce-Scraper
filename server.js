import express from "express";
import cors from "cors";
import {scraper} from "./scrapes/amazonRoute.js";
import { flipkartScraper } from "./scrapes/flipkartRoute.js";

// new api's code
import search from "./API/search.js";

const app = express();
app.use(cors());
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

app.get('/query/flipkart/:name', async (req, res) => {
    const product_name = req.params.name;0
    const flipkartSearchArray = await flipkartScraper(product_name);
    if (flipkartSearchArray.length > 0) {
        res.json(flipkartSearchArray);
    } else {
        res.status(404).send("Product not found or please provide product name");
    }
});

app.get('/search/flipkart-new/:product', function(req, res) {
    search(req.params.product, 'flipkart.com').then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});


app.get('/', (req, res) => {
    res.json("Ecommerce scraper");
});

const PORT = 5000; 
app.listen(PORT, () => { console.log(`server running @ port : ${PORT}`) })
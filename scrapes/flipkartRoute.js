import puppeteer from "puppeteer";

export const flipkartScraper = async (productName) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://www.flipkart.com/search?q=" + productName);

    try {
        await page.waitForSelector('div._2kHMtA');

        const products = await page.evaluate(() => {
            const productNodes = document.querySelectorAll('div._2kHMtA');
            const productList = [];

            productNodes.forEach(node => {
                const product = {};
                const linkElement = node.querySelector('a._1fQZEK');
                const name = linkElement.textContent.trim();
                const priceElement = node.querySelector('div._30jeq3');
                const price = priceElement.textContent.trim();
                const imageElement = node.querySelector('img._396cs4');
                const imageLink = imageElement.src;
                const productLink = linkElement.href;

                product.name = name;
                product.price = price;
                product.imageLink = imageLink;
                product.productLink = productLink;

                productList.push(product);
            });

            return productList;
        });

        await browser.close();
        return products;
    } catch (error) {
        console.error('Error scraping Flipkart:', error);
        await browser.close();
        return [];
    }
};

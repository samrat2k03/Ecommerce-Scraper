import puppeteer from "puppeteer";

export const scraper = async (productName) => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://www.amazon.com");
    await page.type("#twotabsearchtextbox", productName);
    await page.click("#nav-search-submit-button");
    await page.waitForSelector(".s-pagination-next");

    const title = await page.$$eval("h2 span.a-color-base", (nodes) =>
      nodes.map((n) => n.innerText)
    );  

    const price = await page.$$eval(
        "[data-component-type='s-search-result'] span.a-price[data-a-color='base'] span.a-offscreen",
        (nodes) => nodes.map((n) => n.innerText)
    );

    const image = await page.$$eval(
        "[data-component-type='s-search-result'] img.s-image",
        (nodes) => nodes.map((n) => n.src)
    );

    const amazonSearchArray = title.map((value, index) => {
      return {
        title: title[index],
        price: price[index],
        image: image[index]
      };
    });

    await browser.close();

    return amazonSearchArray;
};

import puppeteer from "puppeteer";

const exchangeRateUSDToINR = 75.50;

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
        (nodes) => nodes.map((n) => parseFloat(n.innerText.replace('$', '').replace(',', '')))
    );

    const image = await page.$$eval(
        "[data-component-type='s-search-result'] img.s-image",
        (nodes) => nodes.map((n) => n.src)
    );

    const links = await page.$$eval(
      "[data-component-type='s-search-result'] a.a-link-normal.a-text-normal",
      (nodes) => nodes.map((n) => n.href)
  );

    const amazonSearchArray = title.map((value, index) => {
      const priceInINR = (price[index] * exchangeRateUSDToINR).toFixed(2);
      return {
        title: title[index],
        price: priceInINR,
        image: image[index],
        link: links[index]
      };
    });

    await browser.close();

    return amazonSearchArray;
};

import puppeteer from "puppeteer";

export const flipkart = async (productName) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
    await page.goto("https://www.flipkart.com/");
    await page.type("input[type='text']", productName);
    await page.click("button[type='submit']");
    await page.waitForNavigation();

    const getProductName = await page.$$eval(
        "._4rR01T",
        (nodes) => nodes.map((n) => n.innerText.trim())
    );

    const getProductPrice = await page.$$eval(
        "._30jeq3._1_WHN1",
        (nodes) => nodes.map((n) => n.innerText.trim())
    );

    const getProductImage = await page.$$eval(
        "._396cs4",
        (nodes) => nodes.map((n) => n.src)
    );

    const flipkartSearchArray = getProductName.map((productName, index) => ({
        productName,
        price: getProductPrice[index],
        image: getProductImage[index]
    }));

    await browser.close();

    return flipkartSearchArray;
};

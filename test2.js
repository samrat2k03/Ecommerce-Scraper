// import puppeteer from 'puppeteer';

// async function scrapeFlipkartProducts(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     await page.goto(url);
//     await page.waitForSelector('div._4ddWXP');

//     const products = await page.evaluate(() => {
//       const productNodes = document.querySelectorAll('div._4ddWXP');
//       const productList = [];

//       productNodes.forEach(node => {
//         const product = extractProductData(node);
//         productList.push(product);
//       });

//       return productList;
//     });

//     await browser.close();
//     return products;
//   } catch (error) {
//     console.error('Error scraping Flipkart:', error);
//     await browser.close();
//     return [];
//   }
// }

// function extractProductData(node) {
//   const product = {};
//   const linkElement = node.querySelector('a._1fQZEK');
//   product.name = linkElement.textContent.trim();
//   const priceElement = node.querySelector('div._30jeq3');
//   product.price = priceElement.textContent.trim();
//   const imageElement = node.querySelector('img._396cs4');
//   product.imageLink = imageElement.src;
//   return product;
// }

// // Example usage:
// const url = 'https://www.flipkart.com/search?q=laptop';
// scrapeFlipkartProducts(url)
//   .then(products => {
//     console.log('Scraped Products:', products);
//   })
//   .catch(err => {
//     console.error('Error scraping Flipkart:', err);
//   });


// import puppeteer from 'puppeteer';

// async function scrapeFlipkartProducts(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     await page.goto(url);
//     await page.waitForSelector('div._4ddWXP');

//     const content = await page.evaluate(() => {
//       const divContent = document.querySelector('div._4ddWXP');
//       return divContent.innerHTML;
//     });

//     await browser.close();
//     return content;
//   } catch (error) {
//     console.error('Error scraping Flipkart:', error);
//     await browser.close();
//     return null;
//   }
// }

// // Example usage:
// const url = 'https://www.flipkart.com/search?q=pampers';
// scrapeFlipkartProducts(url)
//   .then(content => {
//     console.log('Scraped Content:', content);
//   })
//   .catch(err => {
//     console.error('Error scraping Flipkart:', err);
//   });

import puppeteer from 'puppeteer';

async function scrapeProductData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
    await page.waitForSelector('span.B_NuCI');

    const product = await page.evaluate(() => {
      const productNameElement = document.querySelector('span.B_NuCI');
      const productName = productNameElement ? productNameElement.textContent.trim() : '';

      const priceElement = document.querySelector('div._30jeq3');
      const price = priceElement ? priceElement.textContent.trim() : '';

      const imageElement = document.querySelector('div._2uAjEK img');
      const imageLink = imageElement ? imageElement.src : '';

      return { productName, price, imageLink };
    });

    await browser.close();
    return product;
  } catch (error) {
    console.error('Error scraping product data:', error);
    await browser.close();
    return null;
  }
}

let productName = "pampers";
const url = `https://www.flipkart.com/search?q=${productName}`;

scrapeProductData(url)
  .then(product => {
    console.log('Product Data:', product);
  })
  .catch(error => {
    console.error('Error scraping product data:', error);
  });

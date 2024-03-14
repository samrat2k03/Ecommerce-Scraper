// import puppeteer from 'puppeteer';

// async function scrapeFlipkartProducts(url) {
//   const browser = await puppeteer.launch({headless:false});
//   const page = await browser.newPage();
//   await page.goto(url);

//   try {
//     await page.waitForSelector('div._2kHMtA');

//     const products = await page.evaluate(() => {
//       const productNodes = document.querySelectorAll('div._2kHMtA');
//       console.log(productNodes);

//       const productData = [];
//       productNodes.forEach(node => {
//         const titleElement = node.querySelector('div._4rR01T');
//         const priceElement = node.querySelector('div._30jeq3 _1_WHN1');
//         // const ratingElement = node.querySelector('div._3LWZlK');

//         if (titleElement && priceElement && ratingElement) {
//           const title = titleElement.innerText;
//           const price = priceElement.innerText;
//         //   const rating = ratingElement.innerText;
//           const link = titleElement.href;
//           productData.push({ title, price, link });
//         }
//       });

//       return productData;
//     });

//     // await browser.close();
//     return products;
//   } catch (error) {
//     console.error('Error scraping Flipkart:', error);
//     // await browser.close();
//     return [];
//   }
// }

// // Example usage:
// const url = 'https://www.flipkart.com/search?q=laptop';
// scrapeFlipkartProducts(url)
//   .then(products => {
//     console.log(products);
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
//     await page.waitForSelector('div._2kHMtA');

//     const content = await page.evaluate(() => {
//       const divContent = document.querySelector('div._2kHMtA');
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
// const url = 'https://www.flipkart.com/search?q=laptop';
// scrapeFlipkartProducts(url)
//   .then(content => {
//     console.log('Scraped Content:', content);
//   })
//   .catch(err => {
//     console.error('Error scraping Flipkart:', err);
//   });


import puppeteer from 'puppeteer';

async function scrapeFlipkartProducts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
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

        product.name = name;
        product.price = price;
        product.imageLink = imageLink;

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
}

let productName = "laptop";
const url = `https://www.flipkart.com/search?q=${productName}`;


scrapeFlipkartProducts(url)
  .then(products => {
    console.log('Scraped Products:', products);
  })
  .catch(err => {
    console.error('Error scraping Flipkart:', err);
  });

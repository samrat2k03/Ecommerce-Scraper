import React from 'react';

function WelcomePage() {
  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-900 text-white font-poppins pt-10'>
      <div className='text-center pt-20'>
        <h1 className='text-5xl font-semibold py-2'>
          Ecommerce Scraper
        </h1>
        <p className='text-xl font-normal py-3'>
          A web scraper for ecommerce sites, <br /> that can scrape everything about products in an efficient manner.
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;

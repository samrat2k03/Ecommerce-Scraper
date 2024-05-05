// import React from 'react';

// function WelcomePage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-r from-purple-900 to-blue-900 text-white font-roboto">
//       <div className="max-w-lg text-center">
//         <h1 className="text-5xl font-bold mb-8">
//           Ecommerce Scraper
//         </h1>
//         <p className="text-lg mb-4">
//           A web scraper for ecommerce sites that efficiently collects product data.
//         </p>
//         <div className="flex justify-center">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <div className="absolute bottom-0 mb-6 text-center w-full">
//         <p className="text-gray-300 text-sm">
//           Developed by Dinakaran, Akash, Thennavan
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WelcomePage;

import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-r from-purple-900 to-blue-900 text-white font-roboto">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold mb-8 tracking-wide">
          Welcome to Ecommerce Scraper
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          A powerful tool to extract product data from your favorite ecommerce websites.
        </p>
        <div className="flex justify-center">
          <Link to="/ecommerce-scraper">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 mb-6 text-center w-full">
        <p className="text-gray-300 text-sm">
          Developed by Dinakaran, Akash, Thennavan
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;

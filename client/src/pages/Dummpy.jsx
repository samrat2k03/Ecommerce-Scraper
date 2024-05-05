// import React, { useState } from "react";

// function ProductSearch() {
//   const [amazonResults, setAmazonResults] = useState([]);
//   const [flipkartResults, setFlipkartResults] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(false);

//   const searchAmazon = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:5000/query/amazon/${searchQuery}`
//       );
//       const data = await response.json();
//       setAmazonResults(data);
//     } catch (error) {
//       console.error("Error fetching Amazon data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const searchFlipkart = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:5000/search/flipkart-new/${searchQuery}`
//       );
//       const data = await response.json();
//       setFlipkartResults(data);
//     } catch (error) {
//       console.error("Error fetching Flipkart data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     searchAmazon();
//     searchFlipkart();
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen ">
//       {/* heading  */}
//       <div className="text-center pt-5 text-white">
//         <h1 className="text-5xl font-bold p-5 text-white font-roboto">
//           Ecommerce Scraper
//         </h1>
//         <p className="text-xl font-poppins">Web scraper for Ecommerce sites</p>
//       </div>

//       {/* searching  */}
//       <div className="max-w-md mx-auto my-8">
//         <form onSubmit={handleSearch}>
//           <label
//             htmlFor="default-search"
//             className="mb-2 text-sm font-medium sr-only text-white"
//           >
//             Search
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search Products..."
//               id="default-search"
//               className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
//             >
//               {loading ? "Searching..." : "Search"}
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-lg font-semibold mb-4">Amazon Results</h2>
//           {amazonResults.map((product, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-16 h-16 mr-4"
//               />
//               <div>
//                 <p className="text-lg font-semibold">{product.title}</p>
//                 <p className="text-gray-600">${product.price}</p>
//                 <a
//                   href={product.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   View on Amazon
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-lg font-semibold mb-4">Flipkart Results</h2>
//           {flipkartResults.map((product, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <img
//                 src={product.thumbnail}
//                 alt={product.name}
//                 className="w-16 h-16 mr-4"
//               />
//               <div>
//                 <p className="text-lg font-semibold">{product.name}</p>
//                 <p className="text-gray-600">₹{product.current_price}</p>
//                 <a
//                   href={product.query_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   View on Flipkart
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductSearch;

import React, { useState } from "react";
import Spinner from "../components/Spinner";

function ProductSearch() {
  const [amazonResults, setAmazonResults] = useState([]);
  const [flipkartResults, setFlipkartResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const searchAmazon = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/query/amazon/${searchQuery}`
      );
      const data = await response.json();
      setAmazonResults(data);
    } catch (error) {
      console.error("Error fetching Amazon data:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchFlipkart = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/search/flipkart-new/${searchQuery}`
      );
      const data = await response.json();
      setFlipkartResults(data);
    } catch (error) {
      console.error("Error fetching Flipkart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const determineVerdict = (amazonRating, flipkartRating) => {
    if (amazonRating < flipkartRating) {
      return (
        <p className="text-red-500 font-bold font-poppins">
          Amazon
          <span className="text-green-500 pl-2">✔</span>
        </p>
      );
    } else if (amazonRating > flipkartRating) {
      return (
        <p className="text-blue-500 font-bold font-poppins">
          Flipkart
          <span className="text-green-500 pl-2">✔</span>
        </p>
      );
    } else {
      return (
        <p className="text-red-500 font-bold font-poppins">Not Decidable</p>
      );
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    searchAmazon();
    searchFlipkart();
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen ">
      {/* heading  */}
      <div className="text-center pt-5 text-white">
        <h1 className="text-5xl font-bold p-5 text-white font-roboto">
          Ecommerce Scraper
        </h1>
        <p className="text-xl font-poppins">Web scraper for Ecommerce sites</p>
      </div>

      {/* searching  */}
      <div className="max-w-md mx-auto my-8">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products..."
              id="default-search"
              className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center mt-8">
          <table className="border-collapse border border-gray-400 bg-white rounded-[10px] w-[90%]">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2 font-poppins bg-[#c3f0ff]">
                  Amazon
                </th>
                <th className="border border-gray-400 px-4 py-2 font-poppins bg-[#c3f0ff]">
                  Flipkart
                </th>
                <th className="border border-gray-400 px-4 py-2 font-poppins bg-[#c3f0ff]">
                  Verdict
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                {
                  length: Math.max(
                    amazonResults.length,
                    flipkartResults.length
                  ),
                },
                (_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">
                      {amazonResults[index] && (
                        <div className="flex flex-col items-center gap-3">
                          <p className="font-poppins">
                            <span className="text-red-500 pr-2">Title:</span>
                            {amazonResults[index].title}
                          </p>
                          <p className="font-poppins">
                            <span className="text-red-500 pr-2">Price:</span>₹
                            {amazonResults[index].price}
                          </p>
                          <img
                            className="w-50 h-50 mr-4"
                            src={amazonResults[index].image}
                            alt={amazonResults[index].title}
                          />
                          <p className="font-poppins">
                            <span className="text-red-500 px-2">Ratings :</span>
                            {amazonResults[index].rating}
                          </p>
                          <a
                            href={amazonResults[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline bg-gray-100 p-2 rounded-lg hover:text-red-500"
                          >
                            View on Amazon
                          </a>
                        </div>
                      )}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {index < flipkartResults.length && (
                        <div className="flex flex-col items-center gap-3">
                          <p className="font-poppins">
                            <span className="text-red-500 pr-2">Title:</span>
                            {flipkartResults[index].name}
                          </p>
                          <p className="font-poppins">
                            <span className="text-red-500 pr-2">Price:</span>₹
                            {flipkartResults[index].current_price}
                          </p>
                          <img
                            className="w-50 h-50 mr-4"
                            src={flipkartResults[index].thumbnail}
                            alt={flipkartResults[index].name}
                          />
                          <a
                            href={flipkartResults[index].query_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline bg-gray-100 p-2 rounded-lg hover:text-red-500"
                          >
                            View on Flipkart
                          </a>
                        </div>
                      )}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {amazonResults[index] &&
                        flipkartResults[index] &&
                        determineVerdict(
                          amazonResults[index].price,
                          flipkartResults[index].current_price
                        )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductSearch;

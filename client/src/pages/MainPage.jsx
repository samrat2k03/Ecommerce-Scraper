import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

function MainPage() {
    const [isProductSearch, setProductSearch] = useState("");
    const [amazonResult, setAmazonResult] = useState([]);
    const [flipkartResult, setFlipkartResult] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const searchProduct = async () => {
        try {
            setLoading(true);
            // const response = await axios.get(`http://127.0.0.1:5000/query/amazon/${isProductSearch}`);
            // setAmazonResult(response.data);
            // const response2 = await axios.get(`http://127.0.0.1:5000/query/flipkart/${isProductSearch}`);
            // setFlipkartResult(response2.data);

            // for simultaneous running 
            const [amazonResponse, flipkartResponse] = await Promise.all([
                axios.get(`http://127.0.0.1:5000/query/amazon/${isProductSearch}`),
                axios.get(`http://127.0.0.1:5000/query/flipkart/${isProductSearch}`)
            ]);
            setAmazonResult(amazonResponse.data);
            setFlipkartResult(flipkartResponse.data);
            
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchProduct();
    };


    return (
        <div>
            {/* title  */}
            <div className="text-center pt-5 text-white">
                <h1 className="text-6xl font-bold p-5 text-white font-poppins">Ecommerce Scraper</h1>
                <p className="text-xl font-poppins">Web scraper for Ecommerce sites</p>
            </div>
            {/* main content  */}
            {/* search box  */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-center items-center pt-10 gap-2">
                    <input
                        type="search"
                        name="search_product"
                        id="search_product"
                        placeholder="Search Products..."
                        className="p-2 rounded-md outline-none w-[50%] bg-[#ede5e5] font-poppins"
                        value={isProductSearch}
                        onChange={(e) => setProductSearch(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* main table  */}
            {/* Display search results */}
            {isLoading ? (
                <Spinner /> 
            ):(
            <div>
                    {isProductSearch && (
                        <p className="text-center font-poppins text-xl pt-[3%] text-white">
                            Searched Product: <span className="text-red-300">{isProductSearch}</span>
                        </p>
                    )}
                    <div className="flex justify-center mt-8">
                    <table className="border-collapse border border-gray-400 bg-white rounded-[20px] w-[70%]">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2 font-poppins">Amazon</th>
                                <th className="border border-gray-400 px-4 py-2 font-poppins">Flipkart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(Math.max(amazonResult.length, flipkartResult.length)).keys()].map(index => (
                                <tr key={index}>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {amazonResult[index] && (
                                            <div className="flex flex-col items-center gap-3">
                                                <p className="font-poppins">
                                                    <span className="text-red-500 pr-2">
                                                        Title: 
                                                    </span> 
                                                    {amazonResult[index].title}</p>
                                                <p className="font-poppins">
                                                    <span className="text-red-500 pr-2">
                                                        Price:     
                                                    </span>
                                                    ₹{amazonResult[index].price}</p>
                                                <img className="w-[80%]" src={amazonResult[index].image} alt={amazonResult[index].title} />
                                                <a href={amazonResult[index].link}>
                                                    <button className="bg-black px-1.5 py-1.5 rounded-xl text-white hover:text-black hover:bg-white">Go to site</button>
                                                </a>
                                            </div>
                                        )}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {flipkartResult[index] && (
                                            <div className="flex flex-col items-center gap-3">
                                                <p  className="font-poppins">
                                                    <span className="text-red-500 pr-2">
                                                        Title: 
                                                    </span> 
                                                    {flipkartResult[index].name}</p>
                                                <p className="font-poppins">
                                                    <span className="text-red-500 pr-2">
                                                        Price:     
                                                    </span>
                                                    {flipkartResult[index].price}</p>
                                                <img className="w-[40%]" src={flipkartResult[index].imageLink} alt={flipkartResult[index].name} />
                                                <a href={flipkartResult[index].productLink}>
                                                    <button className="bg-black px-1.5 py-1.5 rounded-xl text-white hover:text-black hover:bg-white">Go to site</button>
                                                </a>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </div>
    );
}

export default MainPage;

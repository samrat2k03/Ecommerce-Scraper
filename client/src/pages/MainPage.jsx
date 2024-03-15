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
                    <table className="border-collapse border border-gray-400 bg-slate-100">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">Amazon</th>
                                <th className="border border-gray-400 px-4 py-2">Flipkart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(Math.max(amazonResult.length, flipkartResult.length)).keys()].map(index => (
                                <tr key={index}>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {amazonResult[index] && (
                                            <div>
                                                <p>Title: {amazonResult[index].title}</p>
                                                <p>Price: {amazonResult[index].price}</p>
                                                <img src={amazonResult[index].image} alt={amazonResult[index].title} />
                                            </div>
                                        )}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {flipkartResult[index] && (
                                            <div>
                                                <p>{flipkartResult[index].name}</p>
                                                <p>{flipkartResult[index].price}</p>
                                                <img src={flipkartResult[index].imageLink} alt={flipkartResult[index].name} />
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

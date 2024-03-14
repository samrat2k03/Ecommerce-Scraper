import React, { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
    const [isProductSearch, setProductSearch] = useState("");
    const [amazonResult, setAmazonResult] = useState([]);
    const [flipkartResult, setFlipkartResult] = useState([]);

    const searchProduct = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/query/amazon/${isProductSearch}`);
            setAmazonResult(response.data);
            const response2 = await axios.get(`http://127.0.0.1:5000/query/flipkart/${isProductSearch}`);
            setFlipkartResult(response2.data)
        } catch (error) {
            console.log(error);
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
                <h1 className="text-6xl font-bold p-5 text-white">Ecommerce Scraper</h1>
                <p className="text-xl">Web scraper for Ecommerce sites</p>
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
                        className="p-2 rounded-md outline-none w-[50%] bg-[#ede5e5]"
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
            <div>
                <p>
                    Searched Product: <span className="text-red-300">{isProductSearch}</span>
                </p>
                {amazonResult.map((item, index) => (
                        <li key={index}>
                            <div>
                                <p>Title: {item.title}</p>
                                <p>Price: {item.price}</p>
                                <img src={item.image} alt={item.title} />
                            </div>
                        </li>
                    ))}

                {flipkartResult.map((item, index) => (
                    <li key={index}>
                        <div>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>
                            <img src={item.imageLink} alt={item.name} />
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default MainPage;

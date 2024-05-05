import WelcomePage from "./pages/WelcomePage"
import ProductSearch from "./pages/ProductSearch";
import Dummpy1 from "./pages/Dummpy"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div className="bg-[#223449]  min-h-screen">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />;
        <Route path="/ecommerce-scraper" element={<ProductSearch />} />;
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

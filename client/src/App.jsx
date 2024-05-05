import MainPage from "./pages/MainPage"
import WelcomePage from "./pages/WelcomePage"
import Dummpy1 from "./pages/Dummpy"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <div className="bg-[#223449]  min-h-screen">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />;
        <Route path="/ecommerce-scraper" element={<Dummpy1 />} />;
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

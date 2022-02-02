import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import {  useState } from "react";

function App() {

  const [prodCat, setCategory] = useState("All");

 
  return (
    <div className="App">
      <Router>
        <Header 
        setCategory={setCategory}
        // handleCategorySelection={handleCategorySelection}
        />
        <Routes>
          <Route path="/" element={<ProductListing prodCat={prodCat}/>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

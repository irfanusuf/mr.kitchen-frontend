import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OrderForm from "./components/OrderForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OrderForm" element={<OrderForm/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

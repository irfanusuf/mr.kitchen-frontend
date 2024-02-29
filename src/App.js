import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// static imports 
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import OrderForm from "./components/OrderForm";
import Payment from "./components/Payment";
import PaymentOptionDetails from './components/paymentOptionDetails';
import Register from "./components/Register";
import Login from "./components/Login";
import SecureIndex from "./components/SecureIndex";
import ForgotPass from './components/ForgotPass';
import ChangePass from './components/ChangePass';
import DeleteUser from './components/DeleteUser';

const App = () => {

  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/placeorder" element={<OrderForm/>} />
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SecureIndex" element={<SecureIndex/>}  />
      <Route path="/PaymentOptionDetails" element={<PaymentOptionDetails/>} />
      <Route path='/Forgot-Password' element={<ForgotPass/>}/>
      <Route path='/Change-Password' element={<ChangePass/>}/>
      <Route path='/delete/user' element={<DeleteUser/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}

export default App
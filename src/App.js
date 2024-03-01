import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// static imports 

import Navbar from "./sharedComponents/Navbar";
import Home from "./sharedComponents/Home";
import Contact from "./sharedComponents/Contact";
import Footer from "./sharedComponents/Footer";


import Payment from "./paymentComponents/Payment";
import PaymentOptionDetails from './paymentComponents/paymentOptionDetails';
import SecureIndex from "./paymentComponents/SecureIndex";


import Register from "./userComponents/Register";
import Login from "./userComponents/Login";
import ForgotPass from './userComponents/ForgotPass';
import ChangePass from './userComponents/ChangePass';
import DeleteUser from './userComponents/DeleteUser';



import AllItems from './orderComponensts/AllItems';
import OrderForm from "./orderComponensts/OrderForm";

const App = () => {

  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/* user Routes */}
      <Route path="/register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path='/Forgot-Password' element={<ForgotPass/>}/>
      <Route path='/Change-Password' element={<ChangePass/>}/>
      <Route path='/delete/user' element={<DeleteUser/>}/>

      {/* payment Routes */}
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/PaymentOptionDetails" element={<PaymentOptionDetails/>} />
      <Route path="/SecureIndex" element={<SecureIndex/>}  />
      
     
      {/* order routes */}
      <Route path='/items' element={<AllItems/>}/>
      <Route path="/user/placeorder" element={<OrderForm/>} />

    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}

export default App
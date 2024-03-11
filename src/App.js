import React, {useCallback , useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"


// static imports 

import Navbar from "./sharedComponents/Navbar";
import Home from "./sharedComponents/Home";
import Contact from "./sharedComponents/Contact";
import Footer from "./sharedComponents/Footer";
import NotFound from './sharedComponents/NotFound';


import Payment from "./paymentComponents/Payment";
import PaymentOptionDetails from './paymentComponents/paymentOptionDetails';
import SecureIndex from "./paymentComponents/SecureIndex";


import Register from "./userComponents/Register";
import Login from "./userComponents/Login";
import ForgotPass from './userComponents/ForgotPass';
import ChangePass from './userComponents/ChangePass';
import DeleteUser from './userComponents/DeleteUser';



import AllItems from './orderComponensts/AllItems';
import CreateItem from './adminComponents/CreateItem';


import OrderForm from "./orderComponensts/OrderForm";
import Item from './orderComponensts/Item';
const App = () => {


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noItem, setNoItem] = useState("");


  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/allItems");
      console.log(response);

      if (response.data.message === "All Items are here!") {
        setItems(response.data.items);
        setLoading(false);
        if (response.data.items.length === 0) {
          setNoItem("No Items are Available !");
        }
      } else {
        // toast.error("server Error");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    
  }, [fetchData]);




  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>

      {/* shared routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />

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
      <Route path='/items' element={<AllItems
      items ={items}
      loading = {loading}
      />}/>
      <Route path={`/items/${items}`} element={<Item/>}/>

      <Route path="/user/placeorder" element={<OrderForm/>} />

      {/* admin routes */}

      <Route path='/admin/createitem' element={<CreateItem/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>

  )
}

export default App
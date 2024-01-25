import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Orderform.scss'
import upiIcon from '../assests/upi-icon.png'
import stripeIcon from '../assests/stripe-icon.png'
import AppleIcon from '../assests/apple-pay-icon.png'
import masterIcon from '../assests/master-card-icon.png'
import foodIcon from '../assests/mimibubu.gif'
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios'

const OrderForm = () => {

    const navigate = useNavigate()

    
    const [formData, SetFormData] = useState({        // handling form data and updating state of formdata
      name : "",
      address : "",
      phone : "",
      order : ""
    })

    const handleChange = (e) => {
                const { name, value } = e.target;       // handling event listener 
                SetFormData((input) => ({
                   ...input ,   [name]: value
                }));
            };

            
        


// handling front end logic 

    const postOrder = () => {
        try { 
              const postData = axios.post("url" , formData)
               const res  = postData.data
               if(res.status === 201){
                console.log(res.status)
                navigate('/payment')
               }
               else {
                navigate('/OrderForm')
               }
        }
        catch(error) {
            console.log(error)
        }
    }




   // returning Html For rendering in the component

    return (
        <div className='OrderForm'>

            <div className='container'>

              <div className='heading'> <IoMdArrowRoundBack onClick={()=>{navigate('/')}}/>     Order Your Food   <img  src={foodIcon} alt='no'/>   </div> 

                <form>

                    <label> Name</label>
                    <input 
                    placeholder='Enter Your Name here '
                    name = "name"
                    value={formData.name}
                    onChange={handleChange} />



                    <label> Address</label>
                    <input 
                    placeholder='Enter Your Address Seperated by commas'
                    name='address'
                    value={formData.address}
                    onChange={handleChange} />



                    <label> Phone </label>
                    <input 
                    placeholder='Enter Your mobile Number  '
                    name= "phone"
                    value={formData.phone}
                    onChange={handleChange}
                   />



                    <label> Your Order  </label>
                    <select
                     name='order'
                     value={formData.order}
                     onChange={handleChange}>
                        <option > Available Items</option>
                        <option value="kunafah"> Kunafah</option>
                        <option value=" Fried tuna Fish "> Fried Tuna Fish</option>
                        <option value=" bakalvah "> Bakalvah </option>

                    </select>

                    <p>By ordering on our app you are accpeting our <a href='/privacy-policy'>privacy policy</a> and 
                    <a href='/privacy-policy'>user's agreement </a></p>
                    <button type='submit' onClick={postOrder} disabled={false}> Order </button>


                    <span> Payment Option Available </span>


                    <div onClick={()=>{ navigate('/paymentOptionDetails')}} className='payment-icons'>
                        <img src={upiIcon} alt='upi Icon ' />
                        <img src={masterIcon} alt='upi Icon ' />
                        <img src={stripeIcon} alt='upi Icon ' />
                        <img src={AppleIcon} alt='upi Icon ' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default OrderForm
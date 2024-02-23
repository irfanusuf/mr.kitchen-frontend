import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { IoMdArrowRoundBack } from 'react-icons/io'
import foodIcon from '../assests/mimibubu.gif'
import pizzaImg from '../assests/pizza 1.jpg'
import pizzaImg2 from '../assests/pizza 2.jpg'
 
  
// import chickenImg from '../assests/pexels-denys-gromov-12916901-removebg-preview.png'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ForgotPass = () => {
  const navigate = useNavigate()

  const [displayImg, setDisplayImg] = useState(0)

  const [loading, setLoading] = useState(false)




  const [formData, setFormData] = useState({
    email: "",
   
  })

  const handleChange = (e) => {
    const { name, value } = e.target


    setFormData((prevInput) =>
    ({
      ...prevInput,
      [name]: value
    }))
  }



  const handleBackward = () => {
    setDisplayImg((displayImg - 1 + 3) % 3);
  };

  const handleForward = () => {
    setDisplayImg((displayImg + 1) % 3);
  };




  const handleForgotPass = async (e) => {
    e.preventDefault();
    try {

      setLoading(true)
      const response = await axios.post("http://localhost:4000/user/forgotpassword", formData);

      if (response.data.status === 201) {

        toast.success(response.data.message)
       
      
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error("Server Error")
    }
    finally {
      setLoading(false)
    }
  }




  return (

    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      
               />



      <div className='Register-form'>

        <div className='container'>

          <div className='heading'> <IoMdArrowRoundBack onClick={() => { navigate('/login') }} /> Forgot PassWord <img src={foodIcon} alt='no' />   </div>

          <form>

    
            <label> Email</label>
            <input
              type='email'
              placeholder='Enter Your Email here'
              name='email'
              value={formData.email}
              onChange={handleChange} />


            
            <button type='submit' onClick={handleForgotPass} disabled={loading}> Send Mail </button>

         


            <b>Get Exciting offers</b>
            <span className='animate__animated animate__slideInLeft ' > Buy a large pizza and get crispy chicken of worth Rs 300/= free </span>


            <div className='icons'>
              <MdArrowBackIosNew onClick={handleBackward} />
              {displayImg === 1 && <img className='animate__animated animate__slideInUp ' src={pizzaImg} alt='icon' />}
              {displayImg === 2 && <img className='animate__animated animate__slideInUp' src={pizzaImg2} alt='icon' />}
              {displayImg === 3 && <img className='animate__animated animate__slideInUp' src={pizzaImg} alt='icon' />}
              {displayImg === 0 && <img className='animate__animated animate__slideInUp' src={pizzaImg} alt='icon' />}
              <MdArrowForwardIos onClick={handleForward} />

            </div>

          </form>
        </div>
      </div>
    </>
  )

}

export default ForgotPass
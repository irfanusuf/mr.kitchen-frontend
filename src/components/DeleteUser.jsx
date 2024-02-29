import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import foodIcon from "../assests/mimibubu.gif";
import pizzaImg from "../assests/pizza 1.jpg";
import pizzaImg2 from "../assests/pizza 2.jpg";

// import chickenImg from '../assests/pexels-denys-gromov-12916901-removebg-preview.png'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();

  const [displayImg, setDisplayImg] = useState(0);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleBackward = () => {
    setDisplayImg((displayImg - 1 + 3) % 3);
  };

  const handleForward = () => {
    setDisplayImg((displayImg + 1) % 3);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/user/delete/me",
        formData
      );
        if(response.data.message === "User Deleted Succesfully"){
                    toast.success("so gow delte jani");

                    // navigate('/')

        }
        else{

            toast.error(response.data.message)
        }

      


    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error(" Server Error ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div className="Register-form">
        <div className="container">
          <div className="heading">
            {" "}
            <IoMdArrowRoundBack
              onClick={() => {
                navigate("/");
              }}
            />{" "}
            Delete My Account
            <img src={foodIcon} alt="no" />{" "}
          </div>

          <form>
            <label> Email</label>
            <input
              type="email"
              placeholder="Enter Your Email here"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label> Password </label>
            <input
              type="password"
              placeholder="Enter Your password here"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* 
            <p>By logging in  our app you are accpeting our <a href='/privacy-policy'>privacy policy</a> and
              <a href='/privacy-policy'>user's agreement </a></p> */}

            <button type="submit" onClick={handleDelete} disabled={loading}>
              {" "}
              Delete My Account
            </button>

            {/* <b>Get Exciting offers</b>
            <span className='animate__animated animate__slideInLeft ' > Buy a large pizza and get crispy chicken of worth Rs 300/= free </span>
 */}

            {/* <div className='icons'>
              <MdArrowBackIosNew onClick={handleBackward} />
              {displayImg === 1 && <img className='animate__animated animate__slideInUp ' src={pizzaImg} alt='icon' />}
              {displayImg === 2 && <img className='animate__animated animate__slideInUp' src={pizzaImg2} alt='icon' />}
              {displayImg === 3 && <img className='animate__animated animate__slideInUp' src={pizzaImg} alt='icon' />}
              {displayImg === 0 && <img className='animate__animated animate__slideInUp' src={pizzaImg} alt='icon' />}
              <MdArrowForwardIos onClick={handleForward} />

            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

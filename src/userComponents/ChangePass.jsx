import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import foodIcon from "../assests/mimibubu.gif";
import pizzaImg from "../assests/pizza 1.jpg";
import pizzaImg2 from "../assests/pizza 2.jpg";

// import chickenImg from '../assests/pexels-denys-gromov-12916901-removebg-preview.png'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ChangePass = () => {
  const navigate = useNavigate();

  const [displayImg, setDisplayImg] = useState(0);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassWord: "",
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

  // front end logic
  const handleChangePass = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userId = localStorage.getItem('userId')
      const response = await axios.post(
        `http://localhost:4000/user/updatePassword?userId=${userId}`,
        formData
      );

      if (response.data.message === "PassWord Updated SucessFully!") {
     
        localStorage.removeItem('userId')
        navigate('/login')
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Server Error");
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
                navigate("/Forgot-Password");
              }}
            />{" "}
            Change PassWord <img src={foodIcon} alt="no" />{" "}
          </div>

          <form>
            <label> New PassWord</label>
            <input
              type="password"
              placeholder="Enter Your new Password here "
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />

            <label> Confirm New PassWord</label>
            <input
              type="password"
              placeholder="Confirm Your new Password here "
              name="confirmNewPassWord"
              value={formData.confirmNewPassWord}
              onChange={handleChange}
            />

            <button type="submit" onClick={handleChangePass} disabled={loading}>
          
              Change PassWord
            </button>

            <b>Get Exciting offers</b>
            <span className="animate__animated animate__slideInLeft ">
         
              Buy a large pizza and get crispy chicken of worth Rs 300/= free
            </span>

            <div className="icons">
              <MdArrowBackIosNew onClick={handleBackward} />
              {displayImg === 1 && (
                <img
                  className="animate__animated animate__slideInUp "
                  src={pizzaImg}
                  alt="icon"
                />
              )}
              {displayImg === 2 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={pizzaImg2}
                  alt="icon"
                />
              )}
              {displayImg === 3 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={pizzaImg}
                  alt="icon"
                />
              )}
              {displayImg === 0 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={pizzaImg}
                  alt="icon"
                />
              )}
              <MdArrowForwardIos onClick={handleForward} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePass;

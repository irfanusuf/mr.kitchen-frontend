import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Form.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import foodIcon from "../assests/mimibubu.gif";



const styles = {

color : "#ff2e07"

}


const Register = () => {
  const navigate = useNavigate();

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

           
            <p>By deleting your account  you are accpeting our <a href='/privacy-policy'>privacy policy</a> and
              <a href='/privacy-policy'>user's agreement </a></p> 

              <p style={{color : styles.color}}> <b> Disclaimer : </b> After Deleteing your account we will keep your data safe for 30 days and user can reactivate  account by simply logging in anytime in the span of 30 days  </p> 

            <button  style= {{backgroundColor : styles.color}}type="submit" onClick={handleDelete} disabled={loading}>
              {" "}
              Delete My Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import foodIcon from "../assests/mimibubu.gif";
import pizzaImg from "../assests/pizza 1.jpg";
import pizzaImg2 from "../assests/pizza 2.jpg";
import chickenImg from "../assests/pexels-denys-gromov-12916901-removebg-preview.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();

  const [displayImg, setDisplayImg] = useState(0);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0]; // selected files in the array of files
    const Reader = new FileReader(); //  creating instance of fileReader   // inheritance
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const handleBackward = () => {
    setDisplayImg((displayImg - 1 + 3) % 3);
  };

  const handleForward = () => {
    setDisplayImg((displayImg + 1) % 3);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:4000/user/register",
        formData
      );

      if (response.data.message === "Registration Succesful") {
        // toast.success(response.data.message);

        setUsername("")
        setEmail("")
        setPassword("")
        setImage(null)

        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Server Error");
     
    } finally {
      setLoading(false);
    }
  };

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

      <div className="Register-form">
        <div className="container">
          <div className="heading">
            {" "}
            <IoMdArrowRoundBack
              onClick={() => {
                navigate("/");
              }}
            />
            Register <img src={foodIcon} alt="no" />{" "}
          </div>

          <form>
            <label>UserName</label>
            <input
              type="text"
              placeholder="Enter Your Name here "
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label>Profile Image</label>
            <input
              type="file"
              placeholder="Upload Pic "
              name="image"
              accept="image/*"
              onChange={handleImage}
            />

            <img src={image} alt="no-text" width={100} />

            <label> Email</label>
            <input
              type="email"
              placeholder="Enter Your Email here"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label> Password </label>
            <input
              type="password"
              placeholder="Enter Your password here"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <p>
              By registering on our app you are accpeting our{" "}
              <a href="/privacy-policy"> privacy policy</a> and{" "}
              <a href="/privacy-policy"> user's agreement </a>
            </p>

            <button type="submit" onClick={handleRegister} disabled={loading}>
              {" "}
              Register{" "}
            </button>
            <div
              className="already-acc"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already an Account click to login!
            </div>

            <b>Get Exciting offers</b>
            <span className="animate__animated animate__slideInLeft ">
              {" "}
              Buy a large pizza and get crispy chicken of worth Rs 300/= free{" "}
            </span>

            <div className="icons">
              <MdArrowBackIosNew onClick={handleBackward} />

              {displayImg === 0 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={pizzaImg}
                  alt="icon"
                />
              )}
              {displayImg === 1 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={pizzaImg2}
                  alt="icon"
                />
              )}
              {displayImg === 2 && (
                <img
                  className="animate__animated animate__slideInUp"
                  src={chickenImg}
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

export default Register;

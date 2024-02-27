import React, { useEffect, useState } from "react";

import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import InstaIcon from "../assests/ig-instagram-icon.png";
import youtuIcon from "../assests/youtube-color-icon.png";
import faceIcon from "../assests/facebook-round-color-icon.png";
// import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import isloggedin from "../authorization/authmid";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const [isloggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(`'your token' : ${token}`)

    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, []);



  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="brand-name">
        <li>
          {" "}
          <Link to="/"> MR .KITCHEN </Link>{" "}
        </li>
      </div>

      <div className="central-nav">
        <Link to="/order"> Order Food</Link>
        <Link to="/foodGallery"> Our Gallery</Link>
      </div>

      <div className="review">
        <p> Get 20% flat off by reviewing our food </p>
        <Link to="/Register"> Register</Link>

        {isloggedin && <button onClick={handleLogout}> LogOut</button>}
      </div>

      <div className="nav-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={InstaIcon} alt="icon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={youtuIcon} alt="icon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          {" "}
          <img src={faceIcon} alt="icon" />
        </a>
      </div>

      <div className="burger">
        {" "}
        {toggle ? (
          <IoCloseSharp onClick={handleToggle} />
        ) : (
          <GiHamburger onClick={handleToggle} />
        )}
        {toggle && <div className="side-menu"></div>}
      </div>
    </div>
  );
};

export default Navbar;

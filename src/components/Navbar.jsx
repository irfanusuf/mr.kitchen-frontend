import React, { useEffect, useState } from "react";

import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import InstaIcon from "../assests/ig-instagram-icon.png";
import youtuIcon from "../assests/youtube-color-icon.png";
import faceIcon from "../assests/facebook-round-color-icon.png";
import { GiHamburger } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiListSettingsLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const token = localStorage.getItem("token");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  useEffect(() => {
    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = () => {
    if (isloggedin) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setDropDown(false);
      navigate("/");
    } else {
      setDropDown(false);
    }
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
        <Link to="/register"> Register</Link>
        <Link to= "/admin"> Admin </Link>
      </div>



      <div className="nav-icons">
        <div className="menu-icon">
          {" "}
          {!dropdown ? (
            <RiListSettingsLine onClick={handleDropDown} />
          ) : (
            <IoCloseSharp onClick={handleDropDown} />
          )}
        </div>

        {dropdown && (
          <ul className="nav-dropdown">
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an Account !  Login!
            </li>

            <li onClick={()=>{navigate('/user/placeorder')}}>Order Food</li>
            <li>Track Your Package</li>
            <li>Rewards</li>   
            <li onClick={()=>{navigate('/PaymentOptionDetails')}} >Payment Options </li>
            <li>Security Options</li>
            <li>Account Settings</li>
            <li onClick={()=>{navigate('/delete/user')}}>Delete Account </li>
            <li onClick={handleLogout}> Logout</li>
            <li onClick={handleDropDown}> Close</li>
          </ul>
        )}
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

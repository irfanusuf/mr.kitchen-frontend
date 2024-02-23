import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/orderform.scss";
import upiIcon from "../assests/upi-icon.png";
import stripeIcon from "../assests/stripe-icon.png";
import AppleIcon from "../assests/apple-pay-icon.png";
import masterIcon from "../assests/master-card-icon.png";
import foodIcon from "../assests/mimibubu.gif";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const OrderForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [formData, SetFormData] = useState({
    // handling form data and updating state of formdata
    name: "",
    email: "",
    address: "",
    phone: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // handling event listener

    SetFormData((input) => ({
      ...input,
      [name]: value,
    }));
  };

  // handling front end logic

  const postOrder = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/user/order/new",
        formData,

        {
          headers: {
            token: token,
          },
        }
      );

      if (
        response.data.message ===
        "Your order has been accepted ..and will ready in 30 mins"
      ) {
        toast.success("succesful");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("server Error ");
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  // returning Html For rendering in the component

  return (
    <div className="OrderForm">
      <ToastContainer />

      <div className="container">
        <div className="heading">
          {" "}
          <IoMdArrowRoundBack
            onClick={() => {
              navigate("/");
            }}
          />{" "}
          Order Your Food <img src={foodIcon} alt="no" />{" "}
        </div>

        <form>
          <label> Name</label>
          <input
            placeholder="Enter Your Name here "
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label> Email</label>
          <input
            placeholder="Enter Your Email here "
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label> Address</label>
          <input
            placeholder="Enter Your Address Seperated by commas"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label> Phone </label>
          <input
            placeholder="Enter Your mobile Number  "
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label> Your Order </label>
          <select name="order" value={formData.order} onChange={handleChange}>
            <option value="kunafah"> Kunafah</option>
          </select>

          <p>
            By ordering on our app you are accpeting our{" "}
            <a href="/privacy-policy">privacy policy</a> and
            <a href="/privacy-policy">user's agreement </a>
          </p>
          <button type="submit" onClick={postOrder} disabled={!loading}>
            {" "}
            {loading ? "Order" : "Order..."}{" "}
          </button>

          <span> Payment Option Available </span>

          <div
            onClick={() => {
              navigate("/paymentOptionDetails");
            }}
            className="payment-icons"
          >
            <img src={upiIcon} alt="upi Icon " />
            <img src={masterIcon} alt="upi Icon " />
            <img src={stripeIcon} alt="upi Icon " />
            <img src={AppleIcon} alt="upi Icon " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

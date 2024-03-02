import React, { useCallback, useEffect, useState } from "react";
import "./AllItems.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import IsAuthenticated from "../authorization/auth";

const AllItems = () => {

  IsAuthenticated()
  const [items, setItems] = useState([]);
  const [heart, setHeart] = useState(false);

  const handleHeart = async () => {
    setHeart(!heart);

    // try {
    //   const response = await axios.post("pending");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const fetchData =useCallback( async () => {
    try {
      const response = await axios.get("http://localhost:4000/allItems");
      console.log(response);
      if (response.data.message === "All Items are here!") {
        setItems(response.data.items);
      } else {
        toast.error("server Error");
      }
    } catch (err) {
      console.log(err);
    } 
  },[]) 

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ToastContainer />
      <div className="all-items">
        <div className="cards">
          {items.map((item) => (
            <div className="card">
              <img src={item.imageUrl} alt="no-preview" />
              <span>{item.title}</span>
              <h4>{item.description}</h4>
              <span onClick={handleHeart}>
                {heart ? <IoMdHeart /> : <IoIosHeartEmpty />}
                {item.likes.length}
              </span>
              <span>Reviews : {item.review.length}</span>
              <span>
                5 star Rating: <p> {item.rating}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllItems;

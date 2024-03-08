import React, { useCallback, useEffect, useState } from "react";
import "./AllItems.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

import IsAuthenticated from "../authorization/auth";
import Loader from "../sharedComponents/Loader";

const AllItems = () => {
  IsAuthenticated();
  const [items, setItems] = useState([]);
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);
  const [loading , setLoading ]= useState(true);
  const [noItem , setNoItem] = useState("")

  const handleLike = () => {
    setLike(!like);
  };

  const handleDislike = () => {
    setDislike(!dislike);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/allItems");
      console.log(response);



      if (response.data.message === "All Items are here!") {
        setItems(response.data.items);
        setLoading(false)
        if(response.data.items.length === 0){

          setNoItem("No Items are Available !")


        }

      } else {
        toast.error("server Error");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <ToastContainer />


      <div className="all-items">

        
        {loading ? <Loader className= "spinner"/>: 
        
        
        <div className="cards">

      {noItem && <div className="no-item"> {noItem}</div>}


          {items.map((item) => (
            <div className="card">
              <img src={item.imageUrl} alt="no-preview" />
              <div className="details">
                {" "}
                <span>{item.title}</span>
                <h4>{item.description}</h4>

                <div className="icons">  
                  
                  <span onClick={handleLike}>
                  {like ? (
                    <BiSolidLike />
                  ) : (
                    <BiSolidLike style={{ color: "green" }} />
                  )}
                  
                </span>
                <span onClick={handleDislike}>
                  {dislike ? (
                    <BiSolidDislike />
                  ) : (
                    <BiSolidDislike style={{ color: "red" }} />
                  )}
                  
                </span>
                </div>


                <div className="counts">
                    <span>{item.likes && item.likes.length}</span>
                    <span>{item.unlikes && item.unlikes.length}</span>

                </div>
               
              
                <span>
                  <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                </span>
              </div>
            </div>
          ))}
        </div>}
      </div>
    </>
  );
};

export default AllItems;

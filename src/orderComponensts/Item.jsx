import React, { useEffect, useState } from "react";
import "./Item.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState({});
  const [showaddress , setShowAddress] =useState(false)



  const token = localStorage.getItem("token");

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/items/?itemId=${itemId}`,
          {
            headers: {
              token: token,
            },
          }
        );

        console.log(response);

        if (response.data.message === "Item Found!") {
          setItem(response.data.item);
          // setLoading(false);
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="container-m">

      <h1> Order Your Food Now !   ..some Animation </h1>
      <div className="single-card">


        <div className="img">
          <img src={item.imageUrl} alt="no-preview" />
        </div>

        <div className= {!showaddress ? "item-details animate__animated animate__slideInDown " : "no-item-details"}>
          <h1>{item.title}</h1>
          <span>
            {item.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum doloribus, perferendis, velit provident
            accusantium assumenda illum cum architecto, reiciendis ratione
            impedit iure! Quaerat iusto officia dicta iure nulla quam
            voluptatum!
          </span>
         
         <div className="price ">
          <b>Price per Serving : </b>
          <span>{item.price}</span>
         </div>
         

          <div className="qty">
            {" "}
            <button>-</button>
            <input type="number" />
            <button>+</button>
            <button onClick={()=>{setShowAddress(!showaddress)}}> Buy</button>
          </div>

          <div className="liking">
            <b> Liked Last time Give us a thumbs up </b>
            <button>Like</button>
          </div>
        </div>

        <div className=  {showaddress ? "address animate__animated animate__slideInUp " : "no-address"}> 

         <h1> Address</h1>
          <form>
                <label>Name 
                  <input/>
                </label>

          </form>


          <button onClick={()=>{setShowAddress(!showaddress)}}> back </button>
        </div>


      </div>
    </div>
  );
};

export default Item;

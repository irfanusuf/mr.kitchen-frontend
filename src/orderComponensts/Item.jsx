import React, { useEffect, useState } from "react";
import "./Item.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState({});
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
      <div className="single-card">
        <div>
          <img src={item.imageUrl} alt="no-preview" />
        </div>

        <div>
          
            Title : {item.title}
            Description : {item.description}
            Reviews : {item.review}
           
        </div>
      </div>
    </div>
  );
};

export default Item;

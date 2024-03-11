import React from "react";
import "./Item.scss";

const Item = (props) => {


    
  return (
    <div className="container">
      <div className="single-card">
        <div>
            <img src={props.item.imageUrl}  alt="no-preview"/>
        </div>

        <div>

            Title : {props.item.title}
            Description : {props.item.description}
            Reviews : {props.item.review}
            likes : {props.item.likes.length}
            dislikes : {props.item.dislikes.length}

        </div>
      </div>
    </div>
  );
};

export default Item;

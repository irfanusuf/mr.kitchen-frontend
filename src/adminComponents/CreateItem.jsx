import React, { useState } from "react";
import axios  from "axios";
import "./CreateItem.scss";
import Loader from '../sharedComponents/Loader'
import { ToastContainer, toast } from "react-toastify";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [item , setItem] = useState({
      title : "",
      imageUrl : "",
      description : "",
      price : ""

  })

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

    const formData = new FormData()

    formData.append("title" , title)
    formData.append("description" , description)
    formData.append("price" , price)
    formData.append("image" , image)





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/admin/createitem",
        formData
      );
       if(response.data.message === "Item saved!"){
        setItem(response.data.item)
        toast.success("Item Saved Succesfully!")
       }
       else{

       toast.error(response.data.message)
       }
      
    } catch (err) {
      toast.error("server Error")
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">

        <ToastContainer/>
      <div className="item-form">
        <form>
          <h1>Create an item for Sale</h1>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title of the product here  "
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label>Product Image </label>
          <input
            type="file"
            placeholder="Upload Pic "
            name="image"
            accept="image/*"
            onChange={handleImage}
          />

          <img src={image} alt="no-preview" width={100} />

          <label> Description of the Product</label>
          <input
            type="text"
            placeholder="Enter Description of Product here"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label> Price of the Product</label>
          <input
            type="text"
            placeholder="Enter Price of product here"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <button type="submit" onClick={handleSubmit} disabled={loading}>
            {" "}
            Submit{" "}
          </button>
        </form>

      
       
       
       <div className="item">




       {loading ? <Loader/> :
       
       <div className="card">

          <img  src={item.imageUrl}  alt= "no-preview"width={300}/>
          <span>{item.title}</span>
          <span>{item.description}</span>
          <span>{item.price}</span>
          
          
        </div>}
        
        </div>
      </div>
    </div>
  );
};

export default CreateItem;

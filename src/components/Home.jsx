import React, {  } from 'react'
import '../styles/Home.scss'
import { useNavigate } from 'react-router-dom'


const Home = () => {


  const navigate = useNavigate()


 


  return (
    <>
      <div className='main-page'>


        <div>
          <h1> Do you Like </h1>
          <h2> Eating Exotic Foods </h2>

          <p>
            "Ordering with us: Where exotic flavors meet your doorstep, turning every meal into a global adventure! Dare to savor the extraordinary with just a click, because your taste buds deserve a passport to deliciousness."</p>


          <button onClick={()=>{  navigate('./OrderForm')}}>  Order Now </button>



        </div>


      </div>









    </>
  )
}

export default Home
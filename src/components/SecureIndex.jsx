import React from 'react'

import '../styles/SecureIndex.scss'
import { useNavigate } from 'react-router-dom'

const SecureIndex =  async () => {


    const navigate = useNavigate()



      try { 

        const response = await  axios.get('http//localhost:4000/user/homepage')
            if (response.data.message === "Authorized!"){

                   navigate ('/SecureIndex')
            }
            else {

                navigate('/login')
            }



      }
      catch (error){

        console.log(error)
      }









    return (
        <div className='secure-index'>

            <h1>  SecureIndex </h1>



            <h2> this is our secure landing page</h2>













        </div>
    )
}

export default SecureIndex
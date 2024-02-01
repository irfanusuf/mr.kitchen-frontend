import React from 'react'
import '../styles/SecureIndex.scss'
import IsAuthenticated from '../authorization/auth'



const SecureIndex = () => {

 IsAuthenticated()
 
    return (
        <div className='secure-index'>
            <h1>  SecureIndex </h1>
            <h2> this is our secure landing page</h2>
        </div>
    )
}

export default SecureIndex
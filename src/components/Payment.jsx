import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Payment.scss'
import upiIcon from '../assests/upi-icon.png'
import stripeIcon from '../assests/stripe-icon.png'
import AppleIcon from '../assests/apple-pay-icon.png'
import masterIcon from '../assests/master-card-icon.png'
import foodIcon from '../assests/mimibubu.gif'
import PaymentSection from '../components/PaymentSection'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const Payment = () => {

    const navigate = useNavigate()

    const billAmount = "Rs : 430/="
    const order = "kunafah"

  

    const [changeDiv, setChangeDiv] = useState(1)
    const handleBack = () => {
        if (changeDiv === 1) {

        } else {
            setChangeDiv((changeDiv) => (changeDiv) - 1)
        }
    }


    const handleForward = () => {
        if (changeDiv === 4) {

        } else {
            setChangeDiv((changeDiv) => (changeDiv) + 1)
        }
    }


 

 




    // returning Html For rendering in the component

    return (
        <div className='paymentForm'>

            <div className='container'>

                <div className='heading'> <IoMdArrowRoundBack onClick={() => { navigate('/OrderForm') }} />    Pay Your Bill  <img src={foodIcon} alt='no' />   </div>




                <div className='bill-order'>


                    <div className='order'>
                        <label>Your order </label><br />
                        <span> {order}</span>
                    </div>


                    <div className='bill'>
                        <label>Your Total bill </label><br />
                        <span> {billAmount}</span>
                    </div>

                </div>

                {changeDiv ===1 &&  <PaymentSection />}
                {changeDiv ===2 &&  <PaymentSection />}
                {changeDiv ===3 &&  <PaymentSection />}
                {changeDiv ===4 &&  <PaymentSection />}
               


                <div className='payment-form-buttons'>
                    <button onClick={handleBack}> <IoCaretBack /></button>
                    <p>{changeDiv}</p>
                    <button onClick={handleForward} > <IoCaretForward /> </button>
                </div>



                <div className='payment-options'>

                    <span> Payment Option Available </span>
                    <div onClick={() => { navigate('/paymentOptionDetails') }} className='payment-icons'>
                        <img src={upiIcon} alt='Icon' />
                        <img src={masterIcon} alt='Icon' />
                        <img src={stripeIcon} alt='Icon' />
                        <img src={AppleIcon} alt='Icon' />
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Payment
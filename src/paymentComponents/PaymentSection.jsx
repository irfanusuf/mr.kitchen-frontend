import React, {useState}from 'react'
import './Payment.scss'


const PaymentSection = () => {



    const [formData, SetFormData] = useState({        // handling form data and updating state of formdata

        pType: "",
        eDate: "",
        cNumber: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;       // handling event listener 
        SetFormData((input) => ({
            ...input, [name]: value,
        }));
    };


    const handlePayment = () => {

    }

    
    return (
        <div>

            <form className='form'>
                <label> Payment Type </label>
                <select
                    name='pType'
                    value={formData.pType}
                    onChange={handleChange}>
                    <option value="mastercard"> MasterCard</option>
                    <option value="Upi"> Upi Payment</option>
                    <option value="applePay"> Apple Pay</option>
                    <option value="stripe"> Stripe</option>
                </select>
                <label> Expiry Date of Your Card</label>
                <input
                    type='date'
                    placeholder='Enter Your Name here'
                    name="eDate"
                    value={formData.eDate}
                    onChange={handleChange} />
                <label> Master Card </label>
                <input
                    type='number'
                    placeholder='Enter Your Card Number'
                    name="cNumber"
                    value={formData.cNumber}
                    onChange={handleChange}
                />
                <button type='submit' onClick={handlePayment} disabled={false}> Pay</button>
            </form>


        </div>
    )
}

export default PaymentSection
import React from "react";
import "./paymentOptionDetails.scss";

const PaymentOptionDetails = () => {
  return (
    <div className="paymentOptionDetails">
      <h1> Payment Option Details</h1>

      <div className="container">
        <div className="boxes">
          <label> Apple Pay:</label> <br />
          Apple Pay is a secure and convenient payment method for users with
          Apple devices. It allows customers to make payments using their stored
          credit or debit cards in the Apple Wallet. Apple Pay uses tokenization
          to enhance security, ensuring that the actual card details are never
          shared during transactions. Available on iPhone, iPad, Apple Watch,
          and Mac devices.
        </div>

        <div className="boxes">
          <label> UPI (Unified Payments Interface): </label> <br />
          UPI is a popular digital payment system in India that enables seamless
          fund transfers between bank accounts using a mobile number or a UPI
          ID. Customers can link their bank accounts to the app and make quick
          and secure transactions without the need for physical cards. UPI is
          widely adopted across various banks and is a preferred choice for
          digital payments in India.
        </div>

        <div className="boxes">
          <label> Stripe:</label> <br />
          Stripe is a global online payment platform that supports various
          payment methods, including credit and debit cards. Accept payments
          from customers worldwide, supporting major credit cards such as Visa,
          MasterCard, American Express, and more. Stripe employs advanced
          security measures, including encryption and fraud detection, to ensure
          the safety of transactions.
        </div>

        <div className="boxes">
          <label> MasterCard:</label> <br />
          MasterCard is a widely recognized international payment network that
          facilitates transactions using credit and debit cards issued by
          financial institutions. MasterCard is accepted globally, allowing
          customers to use their MasterCard-branded cards for seamless payments.
          MasterCard incorporates various security features, such as EMV chip
          technology and secure authentication methods, to protect cardholder
          information.
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionDetails;

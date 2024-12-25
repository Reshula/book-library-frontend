import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import axios from "axios";
import "./Stripe.css"; 

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("https://book-library-ddbn.onrender.com/api/payment/stripe/charge", {
          amount: 999,
          id: id,
        });

        if (response.data.success) {
          setMessageSuccess(true);
          dispatch(clearCart());
        }
      } catch (error) {
        console.error("Payment error: ", error);
      }
    } else {
      console.error("Stripe error: ", error.message);
    }
  };

  return (
    <div className="checkout-container">
      {!messageSuccess ? (
        <>
          <h2 className="payment-complete">Complete Your Payment</h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="card-element-container">
              <CardElement />
            </div>
            <button type="submit" className="pay-button">
              Pay 
            </button>
          </form>
        </>
      ) : (
        <div>
          <h2 className="payment-success">Your payment was successful!</h2>
        </div>
      )}
    </div>
  );
};

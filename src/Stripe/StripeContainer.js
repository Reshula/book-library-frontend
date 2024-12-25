import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Px7zREOScnNfWE4AAln8XfQbwkPCr2VSqu5w5HoJhDzkuqpK9wl6w5sDDvU8mFnFWuhkp8kuAElK4dpr2kOaIbZ00A2ZM1QSq";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
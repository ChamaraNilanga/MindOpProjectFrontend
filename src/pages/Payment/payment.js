import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";


function Payment() {
  const [product, setProduct] = useState({
    name: "Enrolled Course",
    price: 20,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    // this token is auto received when you write token as key
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    let request = fetch("/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((err) => console.log(err));

    return request;
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <StripeCheckout
          stripeKey="pk_test_51KgMcOC0OWu3ZsneXN1dSucXI34DGfatpaJ1WyOTa1Q6ju541yRxGARpdwxywtboksGRNF818yb0QATP09YljJwI007Nei7X9f"
          token={makePayment}
          name="Buy React"
          price={product.price * 100}
         
        >
          <button className="btn-large blue">
            Buy just Rs. {product.price}
          </button>
        </StripeCheckout>
        {/* <StripeCheckout stripeKey="" token="" name="Buy React" /> */}
      </header>
    </div>
  );
}

export default Payment;

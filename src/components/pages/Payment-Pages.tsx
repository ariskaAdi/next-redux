import React from "react";
import CartProduct from "../layouts/cart-products";
import Navbar from "../layouts/navbar";

const PaymentPages = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8 max-w-md justify-center mx-auto">
        <CartProduct />
      </div>
    </div>
  );
};

export default PaymentPages;

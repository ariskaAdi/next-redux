import React from "react";
import Navbar from "../layouts/navbar";
import CartProduct from "../layouts/cart-products";
import DetailCard from "../layouts/card-detail";

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-start p-8">
        <DetailCard />
        <CartProduct />
      </div>
    </>
  );
};

export default DetailProduct;

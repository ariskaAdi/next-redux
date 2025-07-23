import React from "react";
import Navbar from "../layouts/navbar";
import DetailCard from "../layouts/card-detail";

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-start p-8">
        <DetailCard />
      </div>
    </>
  );
};

export default DetailProduct;

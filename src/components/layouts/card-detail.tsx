"use client";

import { Idata } from "@/types/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardProduct from "../fragments/card/Card";
import { getProductById } from "@/services/ProductService";
import CartProduct from "./cart-products";

const DetailCard = () => {
  const { id: productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<Idata>();

  useEffect(() => {
    const fetchData = async () => {
      if (!productId || Array.isArray(productId)) return;

      try {
        setLoading(true);
        const response = await getProductById(productId);
        setValue(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {loading && <p>loading</p>}
      {value && (
        <CardProduct
          id={value.id}
          title={value.title}
          description={value.description}
          price={value.price}
          image={value.image}
          rating={value.rating}
          category={value.category}
        />
      )}
      <CartProduct />
    </div>
  );
};

export default DetailCard;

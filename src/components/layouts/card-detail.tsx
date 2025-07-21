"use client";

import { useParams } from "next/navigation";
import CardProduct from "../fragments/card/Card";
import CartProduct from "./cart-products";
import { useProductById } from "@/hooks/useProducts";

const DetailCard = () => {
  const productId = useParams().id as string;

  const { data, isLoading, isError } = useProductById(productId);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Something went wrong</p>;
  if (!productId) return <p>Invalid product ID</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {data && (
        <CardProduct
          id={data.id}
          title={data.title}
          description={data.description}
          price={data.price}
          image={data.image}
          rating={data.rating}
          category={data.category}
        />
      )}
    </div>
  );
};

export default DetailCard;

"use client";

import { Idata } from "@/types/data";
import { useEffect, useState } from "react";
import CardProduct from "../fragments/card/Card";
import { getAllProducts } from "@/services/ProductService";

const Card = () => {
  const [isLoading, setLoading] = useState(true);
  const [isProducts, setProducts] = useState<Idata[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading && <p>Loading...</p>}
      {isProducts.map((item) => (
        <CardProduct
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          rating={item.rating}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Card;

"use client";

import { Idata } from "@/types/data";
import { useState } from "react";
import CardProduct from "../fragments/card/Card";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";
import { useProducts } from "@/hooks/useProducts";

const Card = () => {
  const { data, isLoading, isError } = useProducts();
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities((prevQuantity) => ({
      ...prevQuantity,
      [id]: value,
    }));
  };

  const handleToCart = (item: Idata) => {
    const quantity = quantities[item.id] || 1;
    if (quantity <= 0) return;

    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity,
      })
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <CardProduct
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          rating={item.rating}
          category={item.category}
          actionElement={
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={quantities[item.id] || 1}
                min={1}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                className="w-16 p-2 border border-gray-300 rounded-md bg-amber-50"
              />
              <button
                className="flex-1 p-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition duration-200 cursor-pointer"
                onClick={() => handleToCart(item)}>
                Add to cart
              </button>
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Card;

"use client";

import { Idata } from "@/types/data";
import { useEffect, useState } from "react";
import CardProduct from "../fragments/card/Card";
import { getAllProducts } from "@/services/ProductService";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";

const Card = () => {
  const [isLoading, setLoading] = useState(true);
  const [isProducts, setProducts] = useState<Idata[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        setProducts(products);

        const initialQuantity: Record<string, number> = {};
        products.forEach((item) => {
          initialQuantity[item.id] = 1;
        });
        setQuantities(initialQuantity);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities((prevQuantity) => ({
      ...prevQuantity,
      [id]: value,
    }));
  };

  const handleToCart = (item: Idata) => {
    const quantity = quantities[item.id];

    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity,
      })
    );
  };

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

"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const CartProduct = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="px-4 justify-center flex ">
      <div className="w-full ">
        <h1 className="text-2xl font-bold mb-4 text-center">Cart Items</h1>
        <ul className="">
          {cart.length === 0 ? (
            <p className="text-center">No items in cart</p>
          ) : (
            cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border border-gray-200 p-4 rounded-lg shadow bg-amber-50 ">
                <div>
                  <p className="font-semibold line-clamp-1">
                    {item.title.length > 50
                      ? `${item.title.slice(0, 50)}...`
                      : item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price * item.quantity)}
                </p>
              </li>
            ))
          )}
        </ul>
        <div className="mt-8 bg-amber-50 p-4 rounded-lg shadow">
          <p className="font-bold text-right mt-4">
            Total :{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(
              cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

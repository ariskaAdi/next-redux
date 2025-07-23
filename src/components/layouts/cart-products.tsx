"use client";

import { removeItem } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartProduct = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log("Cart items:", cart);
  console.log("Total price:", totalPrice);

  return (
    <div className="px-4 justify-center flex ">
      <div className="w-full ">
        <h1 className="text-sm font-bold mb-4 text-center">Cart Items</h1>
        <ul className="">
          {cart.length === 0 ? (
            <p className="text-center">No items in cart</p>
          ) : (
            cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border border-gray-200 p-4 rounded-lg shadow bg-amber-50 ">
                <div>
                  <p className="font-semibold line-clamp-1 text-xs">
                    {item.title.length > 20
                      ? `${item.title.slice(0, 20)}...`
                      : item.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="flex justify-evenly gap-2 items-center">
                  <p className="font-bold text-sm">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.price * item.quantity)}
                  </p>
                  <button
                    className="text-sm text-red-500 cursor-pointer"
                    onClick={() => handleRemove(item.id)}>
                    <Trash width={20} height={20} />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        {totalPrice > 0 && (
          <div className="mt-8 bg-amber-50 p-4 rounded-lg shadow">
            <p className="font-bold text-right mb-4">
              Total :{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totalPrice)}
            </p>
            <Link href="/checkout">
              <button className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition duration-200 cursor-pointer font-bold">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProduct;

"use client";

import { logoutAuth } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CartProduct from "./cart-products";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const cart = useSelector((state: RootState) => state.cart.items);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const isLoggedIn = !!token;
  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logoutAuth());
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="p-4 bg-gray-200">
      <div className="flex justify-evenly items-center">
        <Link href="/">
          <h1 className="font-bold text-lg">App</h1>
        </Link>
        <div className="w-1/2">
          <input
            type="text"
            className="w-full bg-amber-50 px-4 py-2 rounded-2xl border border-blue-100 "
            placeholder="Search..."
          />
        </div>

        <div className="flex justify-between gap-8 items-center">
          <Popover>
            <PopoverTrigger asChild className="cursor-pointer">
              <div className="relative w-fit">
                <ShoppingCart className="w-12 h-8" />
                {cart.length > 0 && (
                  <Badge className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs rounded-full">
                    {totalQuantity}
                  </Badge>
                )}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-96">
              <CartProduct />
            </PopoverContent>
          </Popover>

          {isLoggedIn ? (
            <div className="flex gap-4 items-center">
              <span className="text-sm">Welcome, {user?.user}</span>
              <button
                onClick={() => handleLogout()}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-blue-500 text-white px-3 py-1 rounded font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

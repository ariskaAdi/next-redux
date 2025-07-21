"use client";

import { logoutAuth } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const isLoggedIn = !!user?.user;
  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAuth());
  };

  return (
    <nav className="p-4 bg-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">App</h1>
        <div>
          {isLoggedIn ? (
            <div className="flex gap-4 items-center">
              <span className="text-sm">Welcome, {user.user}</span>
              <button
                onClick={() => handleLogout()}
                className="bg-red-500 text-white px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
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

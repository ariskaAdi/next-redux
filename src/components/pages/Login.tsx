"use client";

import React from "react";
import Button from "../elements/Button/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-500">
          login
        </h2>
        <form action="" className="space-y-4">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full py-2 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full py-2 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-8">
            <Button onClick={() => alert("clicked")}>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

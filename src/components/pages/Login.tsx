"use client";

import React, { useState } from "react";
import Button from "../elements/Button/Button";
import { useLoginUser } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginAuth } from "@/redux/slices/authSlice";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate: login, isPending, isError } = useLoginUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      {
        username: form.username,
        password: form.password,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          dispatch(loginAuth({ token: data.token }));
          router.push("/");
        },
        onError: (error) => {
          console.log(error);
          alert("GAGAL LOGIN");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-500">
          login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={form.username}
              className="mt-1 block w-full py-2 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
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
              value={form.password}
              className="mt-1 block w-full py-2 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="mt-8">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Loading..." : "Login"}
            </Button>
          </div>
        </form>
        {isError && <p className="text-red-500">Gagal Login</p>}
      </div>
    </div>
  );
};

export default Login;

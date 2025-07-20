"use client";
import { decrement, increment } from "@/redux/slices/counterSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
      <div className="rounded-2xl max-w-md bg-white p-8 ">
        <h1 className="text-2xl font-bold ">counter : {counter} </h1>
        <div className="flex justify-between gap-4 mt-8">
          <button
            className="font-bold items-center bg-amber-100 p-4 rounded-2xl"
            onClick={() => dispatch(increment())}>
            increment
          </button>
          <button
            className="font-bold items-center bg-amber-100 p-4 rounded-2xl"
            onClick={() => dispatch(decrement())}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;

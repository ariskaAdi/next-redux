import ImagesElement from "@/components/elements/Images/Images";
import { Idata } from "@/types/data";
import Link from "next/link";
import React from "react";

const CardProduct = (props: Idata) => {
  const { id, title, price, description, image, rating } = props;
  return (
    <div key={id} className="max-w-xs border-2 border-gray-200 rounded-lg ">
      <Link href={`/products/${id}`}>
        <div className="bg-white rounded-t-lg">
          <ImagesElement image={image} title={title} />
        </div>
        <div className="p-4">
          <h1 className=" text-lg font-bold line-clamp-1">{title}</h1>
          <p className="text-sm line-clamp-2">{description}</p>
          <div className="flex justify-between mt-3 font-bold">
            <p>${price}</p>
            <p>
              Rating: {rating.rate} / {rating.count}
            </p>
          </div>
        </div>
        <button className="w-full p-2 bg-black text-white rounded-b-lg">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default CardProduct;

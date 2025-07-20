import Image from "next/image";
import React from "react";

type ImageProps = {
  image: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
};

const ImagesElement = (props: ImageProps) => {
  const {
    image,
    title,
    width = 200,
    height = 200,
    className = "w-full h-52 object-contain rounded-t-lg",
  } = props;
  return (
    <>
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className={className}
      />
    </>
  );
};

export default ImagesElement;

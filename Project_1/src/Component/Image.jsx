import React from "react";

const Image = ({ imageLink, ImageHeight, ImageWidth }) => {
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-2xl">Image Resizer App</h1>
      <img src={imageLink} height={ImageHeight} width={ImageWidth} alt="Image " />
    </div>
  );
};

export default Image;

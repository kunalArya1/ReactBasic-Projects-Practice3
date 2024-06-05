import React from "react";

const Car = ({ data }) => {
  return (
    <div className=" text-center">
      <h1 className=" text-center">Car Catogeries</h1>
      {data.map((car) => (
        <h1> {car.category}</h1>
      ))}
    </div>
  );
};

export default Car;

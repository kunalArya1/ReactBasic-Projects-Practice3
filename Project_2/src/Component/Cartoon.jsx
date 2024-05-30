import React from "react";
import { cartoons } from "../utils/data";

/**  Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5.  */

const Cartoon = () => {
  const filterCartton = cartoons.filter((cartton) => cartton.magnitude >= 5);
  return (
    <div className=" text-center">
      <h1 className=" font-bold text-2xl p-4">Cartoon Character App</h1>
      <div>
        {filterCartton.map((cartoon) => (
          <div
            key={cartoon.id}
            className=" w-1/2 m-auto border border-gray-300 shadow-lg rounded-lg p-4 my-4"
          >
            <h2 className=" text-xl font-bold">{cartoon.name}</h2>
            <p className=" text-lg">Superpower: {cartoon.superpower}</p>
            <p className=" text-lg">Magnitude: {cartoon.magnitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartoon;

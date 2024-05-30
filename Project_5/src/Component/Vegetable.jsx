import React from "react";
import { vegetables } from "../utils/data";
import { useState } from "react";

/*  Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’. */

const Vegetable = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" text-center w-1/2 m-auto ">
      <h1 className=" font-bold p-4 text-2xl">Green Vegitable App </h1>
      {vegetables.map((veget) => (
        <div
          style={{
             backgroundColor:
               show && veget.pickDate === "2023-03-30" ? "lightgreen" : "none",
          }}
          key={veget.id}
          className=" p-4  mb-3 rounded-md"
        >
          <h1 className=" uppercase text-semibold"> Name : {veget.name}</h1>
          <h1> PickDate : {veget.pickDate}</h1>
        </div>
      ))}

      <button
        onClick={() => setshow(!show)}
        className=" px-4 py-3 bg-green-600 rounded-md font-bold hover:scale-125 transition-all ease-linear"
      >
        Highlight Fresh Vegetables
      </button>
    </div>
  );
};

export default Vegetable;

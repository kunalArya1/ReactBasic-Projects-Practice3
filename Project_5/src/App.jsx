import React from "react";
import Vegetable from "./Component/Vegetable";

/*  Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’. */
const App = () => {
  return (
    <div className=" h-screen w-screen bg-gray-700 text-white">
      <Vegetable />
    </div>
  );
};

export default App;

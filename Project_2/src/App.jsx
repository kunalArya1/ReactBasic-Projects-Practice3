import React from "react";
import Cartoon from "./Component/Cartoon";

/**  Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5.  */
const App = () => {
  return (
    <div className=" bg-gray-700 h-screen text-white">
      <Cartoon />
    </div>
  );
};

export default App;

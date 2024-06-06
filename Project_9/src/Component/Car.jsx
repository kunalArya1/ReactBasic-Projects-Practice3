import React from "react";

/**  
 
9. Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:
 luxury: 5
 sports: 2


  */

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

import React from "react";
import Bounquet from "./Component/Bounquet";

/**  7. Build a React component to display the flowers of a bouquet in an ordered list on the DOM  which has a price above 2000. Pass data as prop.*/

const App = () => {
  const bouquet = [
    {
      id: 1,
      flowers: ["rose", "lily", "marigold"],
      totalFlowers: 9,
      price: 1400,
    },
    {
      id: 2,
      flowers: ["snapdragon", "sunflower"],
      totalFlowers: 10,
      price: 3400,
    },
  ];
  return (
    <div>
      <Bounquet details={bouquet} />
    </div>
  );
};

export default App;

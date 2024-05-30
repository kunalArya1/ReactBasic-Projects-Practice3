import React from "react";
import Cartoon from "./Component/Cartoon";
import { cartoons } from "./utils/data";

const App = () => {
  return (
    <div>
      <Cartoon superpower={"Intelligence"} />
    </div>
  );
};

export default App;

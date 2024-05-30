import React from "react";
import Cartoon from "./Component/Cartoon";
import { cartoons } from "./utils/data";

const App = () => {
  return (
    <div>
      <Cartoon cartoons={cartoons} />
    </div>
  );
};

export default App;

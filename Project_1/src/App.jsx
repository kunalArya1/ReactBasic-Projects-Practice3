import React from "react";
import Image from "./Component/Image";

/**  Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. 

Image link- https://picsum.photos/200  */

const App = () => {
  return (
    <div>
      <Image
        imageLink={"https://picsum.photos/200"}
        ImageHeight={"900px"}
        ImageWidth={"500px"}
      />
    </div>
  );
};

export default App;

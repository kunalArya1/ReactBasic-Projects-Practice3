import React from "react";

/** Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props. */
const Cartoon = ({ cartoons }) => {
  const EvenMagniCartoon = cartoons.filter(
    (cartoon) => cartoon.magnitude % 2 == 0
  );
  return (
    <div>
      <h1>Cartoon Characters</h1>
      {EvenMagniCartoon.map((cartoon) => (
        <h1 key={cartoon.id}>{cartoon.name}</h1>
      ))}
    </div>
  );
};

export default Cartoon;

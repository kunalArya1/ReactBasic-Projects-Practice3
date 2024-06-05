import React from "react";

/**  7. Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop. */

const Bounquet = ({ details }) => {
  const filterredBounquent = details.filter(
    (bounquet) => bounquet.price > 2000
  );

  console.log(filterredBounquent);
  console.log(filterredBounquent[0].flowers);

  return (
    <div>
      {filterredBounquent.length > 0 ? (
        filterredBounquent.map((bounquet) =>
          bounquet.flowers.map((flower) => (
            <div key={flower}>
              <h1 className=" font-bold text-2xl  p-5  text-center mt-20">
                {flower}
              </h1>
            </div>
          ))
        )
      ) : (
        <h1> No Bounquet Fonund </h1>
      )}
    </div>
  );
};

export default Bounquet;

import React from "react";

const Bounquet = ({ details }) => {
  const filterredBounquent = details.filter((bounquet) =>
    bounquet.flowers.includes("rose")
  );

  //   console.log(filterredBounquent);
  return (
    <div>
      {filterredBounquent.length > 0 ? (
        filterredBounquent.map((bounquet) => (
          <div key={bounquet.id}>
            <h1 className=" font-bold text-2xl  p-5  text-center mt-20">
              Price of bouquet with roses : {bounquet.price}
            </h1>
          </div>
        ))
      ) : (
        <h1> No Bounquet Fonund </h1>
      )}
    </div>
  );
};

export default Bounquet;

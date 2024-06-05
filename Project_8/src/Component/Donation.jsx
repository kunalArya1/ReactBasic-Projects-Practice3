import React from "react";

const Donation = ({ data }) => {
  console.log(data);
  const totalDonation = data.reduce((acc, donat) => acc + donat.Donation, 0);
  return (
    <div>
      <h1>Donation Data</h1>
      {totalDonation}
    </div>
  );
};

export default Donation;

import React from "react";

const POC = () => {
  return (
    <div className="flex w-full h-full  ">
      {/* Text */}
      <div className="flex flex-col w-full justify-between text-center mx-2">
        <div className="h-24"></div>
        <div className="h-72"></div>
        <h2 className="font-semibold text-xl">
          Undergoing PoC for Payment API
        </h2>

        <button className="h-12 w-36" onClick={()=>{
          let response  = fetch('http://localhost:3000/api/payment/payment', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('data',data);
            });
        }}>Request BABY!! </button>
      </div>
    </div>
  );
};

export default POC;

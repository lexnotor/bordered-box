import React from "react";

const Bordered = ({ children }) => {
  return (
    <div className="relative bg-neutral-800 p-1 overflow-hidden rounded-lg">
      <div className="absolute-center border-x-[1000px] border-y-[5000px] border-x-transparent rot"></div>
      <div className="absolute-center border-x-[800px] border-y-[900px] border-y-transparent rot-one"></div>
      <div className="bg-neutral-800 text-white text-center relative rounded-lg p-6 max-w-[24rem]">
        {children}
      </div>
    </div>
  );
};

export default Bordered;

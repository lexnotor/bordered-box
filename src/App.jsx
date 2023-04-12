import React from "react";
import "./App.css";

function App() {
  return (
    /* Box*/
    <div className="relative p-0 flex w-[20rem] h-[25rem] bg-[#1c1917] m-5 p-2 overflow-hidden rounded-lg">
      {/*color*/}
      <div className="absolute top-1/2 left-1/2 border-x-[2000px] border-y-[1000px] rounded-full border-t-transparent border-b-transparent border-l-[#f472b6] border-r-[#d97706] rot"></div>
      <div className="w-full h-full box-content bg-[#1c1917] text-[#f472b6] text-2xl flex justify-center items-center relative rounded-lg">
        lexnotor
      </div>
    </div>
  );
}

export default App;

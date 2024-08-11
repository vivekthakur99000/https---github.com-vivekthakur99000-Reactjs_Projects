import React, { useState } from "react";

function NavBar({setSearchQuery}) {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
  }

  return (
    <div className=" bg-blue-300 w-full h-[60px] flex items-center justify-between px-20">
      <h3 className=" font-mono font-semibold text-xl">News</h3>
      <ul className=" flex justify-center items-center gap-6">
        <li className="cursor-pointer font-serif text-[18px] transition-all hover:font-semibold">
          Cricket
        </li>
        <li className="cursor-pointer font-serif text-[18px] transition-all hover:font-semibold">
          Politics
        </li>
        <li className="cursor-pointer font-serif text-[18px] transition-all hover:font-semibold">
          Technology
        </li>
        <li className="cursor-pointer font-serif text-[18px] transition-all hover:font-semibold">
          Finance
        </li>
      </ul>
      <div className="flex items-center justify-center gap-3">
        <input  
          type="text"
          className=" h-8 pl-2 outline-none text-md font-serif"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick} className=" bg-[#232323] text-white px-6 py-1 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
}

export default NavBar;

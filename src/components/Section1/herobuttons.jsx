import React from "react";

const HeroButtons = () => {
  return (
    <div className="flex gap-5 mt-8">

      <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 duration-300">
        Explore Personas
      </button>

      <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white duration-300">
        Download Report
      </button>

    </div>
  );
};

export default HeroButtons;
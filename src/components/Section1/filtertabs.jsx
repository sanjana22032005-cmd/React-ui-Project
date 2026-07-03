import React from "react";

const tabs = [
  "All",
  "Satisfied",
  "Underbanked",
  "Premium",
  "Student"
];

const FilterTabs = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mt-6 flex-wrap">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-6 py-3 rounded-full duration-300 ${
            filter === tab
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
};

export default FilterTabs;
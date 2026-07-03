import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow-lg">

        <i className="ri-search-line text-2xl text-gray-500"></i>

        <input
          type="text"
          placeholder="Search customer..."
          className="outline-none w-full text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
    </div>
  );
};

export default SearchBar;
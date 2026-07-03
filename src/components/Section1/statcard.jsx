import React from "react";

const StatCard = ({number,title}) => {
  return (

    <div className="bg-white shadow-lg rounded-3xl p-5 w-40">

      <h1 className="text-4xl font-bold">

        {number}

      </h1>

      <p className="text-gray-500 mt-2">

        {title}

      </p>

    </div>

  );
};

export default StatCard;
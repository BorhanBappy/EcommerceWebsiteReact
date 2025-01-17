import React, { useState } from "react";
import { clsx as cn } from "clsx";

const ButtonGroup = ({ filterItems, showAll }) => {
  const [activeFilter, setActiveFilter] = useState("All"); // Track active button

  const handleClick = (filter) => {
    setActiveFilter(filter); // Set the active filter
    if (filter === "All") {
      showAll();
    } else {
      filterItems(filter);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => handleClick("All")}
        className={cn(
          "px-4 py-2 rounded-md transition-transform duration-300 font-semibold",
          activeFilter === "All"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-black hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg"
        )}
      >
        All Products
      </button>
      <button
        onClick={() => handleClick("Dress")}
        className={cn(
          "px-4 py-2 rounded-md transition-transform duration-300 font-semibold",
          activeFilter === "Dress"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-black hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg"
        )}
      >
        Clothing
      </button>
      <button
        onClick={() => handleClick("Hoodies")}
        className={cn(
          "px-4 py-2 rounded-md transition-transform duration-300 font-semibold",
          activeFilter === "Hoodies"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-black hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg"
        )}
      >
        Hoodies
      </button>
      <button
        onClick={() => handleClick("Bag")}
        className={cn(
          "px-4 py-2 rounded-md transition-transform duration-300 font-semibold",
          activeFilter === "Bag"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-200 text-black hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg"
        )}
      >
        Bag
      </button>
    </div>
  );
};

export default ButtonGroup;

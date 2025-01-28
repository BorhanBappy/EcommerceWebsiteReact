/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
      {filteredItems.slice(0, 8).map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
        >
          <Link to={`/${item.category}/${item.id}`} className="flex-grow">
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="p-4 flex flex-col flex-grow">
            <h4 className="text-lg font-semibold mb-2 text-gray-800 break-words overflow-hidden text-ellipsis whitespace-nowrap">
              {item.title}
            </h4>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-lg font-semibold text-gray-900">
                ${item.price}
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => {
                // Add to cart logic here
                console.log(`Added ${item.title} to cart`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

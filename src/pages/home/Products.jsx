import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/Card";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("products.json");
        setProducts(response.data);
      } catch {
        setError(error.message);
      }
    };
    fetchData();
  }, [ ]);
  //   console.log(products);

  return (
    <div className=" max-w-screen-2xl  container mx-auto lg:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>
      {/* Product Cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button>All Products</button>
            <button>Clothing</button>
            <button>Hoodies</button>
            <button>Bag</button>
          </div>
          {/* Sorting Option */}
          <div className="flex  justify-end my-2 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <Card filteredItems={products} />
      </div>
    </div>
  );
};

export default Products;

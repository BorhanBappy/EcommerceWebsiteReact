import React from "react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/Card";
// import { Link, useLocation } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("products.json");
        setProducts(response.data);
        setFilteredItems(response.data);
      } catch {
        setError(error.message);
      }
    };
    fetchData();
  }, [error]);
  // console.log(products);

  // Filtering Function
  const filterItems = (category) => {
    // First here check all products using ternary Operator
    const filtered = products.filter((item) => item.category == category);
    setFilteredItems(filtered);
  };
  // Show all products
  const showAll = () => {
    setFilteredItems(products);
    // selectedCategory("all")
  };

  // const location = useLocation();

  // useEffect(() => {
  //   // Check if the current route is "/"
  //   if (location.pathname === "/") {
  //     // Execute showAll function
  //     showAll();
  //     // You can add additional logic here if needed
  //   }
  // }, [location.pathname, showAll]);

  // Sorting Functionality

  const handleSorting = (option) => {
    setSortOption(option);

    // Logic sorting
    let sortItem = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortItem.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortItem.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortItem.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortItem.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default sorting or no sorting logic needed
        break;
    }

    // console.log(sortItem);
    // Update state with sorted items if necessary
    setFilteredItems(sortItem);
  };

  return (
    <div className=" max-w-screen-2xl  container mx-auto lg:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>
      {/* Product Cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            {/* <Link to="/" onClick={showAll}>
              All Products
            </Link>
            <Link to="/clothing" onClick={() => filterItems("Dress")}>
              Clothing
            </Link>
            <Link to="/hoodies" onClick={() => filterItems("Hoodies")}>
              Hoodies
            </Link>
            <Link to="/bag" onClick={() => filterItems("Bag")}>
              Bag
            </Link> */}
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
          </div>
          {/* Sorting Option */}
          <div className="flex  justify-end my-2 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              className="bg-black text-white px-2 py-1 rounded-sm"
              onChange={(e) => handleSorting(e.target.value)}
              // value={sortOption}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <Card filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;

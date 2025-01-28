import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/Card";
import ButtonGroup from "./ButtonGroup ";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("products.json");
        setProducts(response.data);
        setFilteredItems(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // Filtering Function
  const filterItems = (category) => {
    const filtered = products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSortOption("default");
  };

  // Show all products
  const showAll = () => {
    setFilteredItems(products);
    setSortOption("default");
  };

  // Sorting Functionality
  const handleSorting = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredItems(sortedItems);
  };

  if (error) {
    return <div className="text-red-500">Failed to load products: {error}</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-4 mb-12">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap gap-4">
            <ButtonGroup filterItems={filterItems} showAll={showAll} />
          </div>
          <div className="flex items-center space-x-2">
            <FaFilter className="text-black h-4 w-4" />
            <select
              className="bg-black text-white px-2 py-1 rounded"
              onChange={(e) => handleSorting(e.target.value)}
              value={sortOption}
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

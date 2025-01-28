import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProductList() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products.json");
        const data = response.data;
        const selectedProduct = data.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value) || 0);
    setQuantity(newQuantity);
  };

  const handleConfirmOrder = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to confirm the order?"
    );

    if (userConfirmed) {
      setOrderConfirmed(true);
    }
  };

  const { title, category, price, image, status, description } = product;

  return (
    <div>
      <div className="mt-48 flex flex-col md:flex-row items-center justify-between md:ml-4 md:mr-4">
        <div className="max-w-xs mx-auto bg-white shadow-md overflow-hidden rounded-lg group">
          <div className="relative overflow-hidden">
            {/* Add hover zoom effect */}
            <img
              src={image}
              alt={title}
              className="w-full h-full transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <div className="px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">{category}</p>
            <p className="text-lg font-bold text-gray-800">${price}</p>
            <p
              className={`text-sm ${
                status === "In Stock" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <h1 className="text-2xl p-4">Product Details</h1>
          <p className="text-justify">{description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-950 text-white px-4 py-2 rounded mt-4"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
          {isOrderConfirmed && (
            <p className="text-green-500 mt-2">Order Confirmed!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProductList;

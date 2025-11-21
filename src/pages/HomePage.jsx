import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getProductsAPI } from "../services/allAPI";
import AddForm from "../components/AddForm";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const getProducts = async () => {
    try {
      const result = await getProductsAPI();
      console.log(result.data);
      setAllProducts(result.data);
    } catch (err) {
      console.log("Failed to get products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="mx-25">
        <div className="flex justify-between mt-10">
          <h1 className="text-4xl font-medium">Products</h1>
          <button
            onClick={() => setShowAddProduct(true)}
            className="bg-blue-600 text-xl text-white p-3 rounded-xl"
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {allProducts?.map((product) => {
            return (
              <Card key={product.id} product={product} className="col-span-1" />
            );
          })}
        </div>
        {showAddProduct && (
          <AddForm showAddProduct={() => setShowAddProduct(false)} />
        )}
      </div>
    </>
  );
};

export default HomePage;

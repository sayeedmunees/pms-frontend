import { useEffect } from "react";
import { deleteProductAPI, getProductsAPI } from "../services/allAPI";

function Card({ product }) {
  const deleteProduct = async (id) => {
    try {
      const deletedProduct = await deleteProductAPI(id);
      console.log(deletedProduct.data);
    } catch (err) {
      setError("Failed to fetch products");
    }
  };

  useEffect(() => {
    getProductsAPI();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl ">
      <img
        src={product.image}
        alt={product.image}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-2">Stock : {product.stock}</p>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
        </div>

        <div className="flex justify-center items-center mt-4 gap-2">
          <button className="bg-blue-600 border w-full hover:bg-blue-900  text-white px-4 py-2 rounded-lg transition-colors font-medium">
            Update
          </button>
          <button
            onClick={() => deleteProduct(product.id)}
            className="bg-red-600 border  w-full hover:bg-red-900  text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

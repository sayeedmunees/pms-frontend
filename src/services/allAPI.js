import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// view products
export const getProductsAPI = async () => {
  return await commonAPI("get", `${serverURL}/products`, "");
};

// add product
export const addProductAPI = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/products`, reqBody);
};

// update product
export const updateProductAPI = async (id, reqBody) => {
  return await commonAPI("put", `${serverURL}/products/${id}`, reqBody);
};

// delete product
export const deleteProductAPI = async (id) => {
  return await commonAPI("delete", `${serverURL}/products/${id}`, "");
};

import api from "./axios";

export const fetchProduct = async () => {
  const response = await api.get("/products");
  return response.data;
};

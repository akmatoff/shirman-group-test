import axios from "axios";
import { IProduct } from "../types";

export default async function updateProduct(
  id: number,
  data: Partial<IProduct>
) {
  return axios
    .put<IProduct>(`https://dummyjson.com/products/${id}`, data)
    .then(({ data }) => data);
}

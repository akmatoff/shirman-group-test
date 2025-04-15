import axios from "axios";
import { IProduct } from "../types";

interface Params {
  categoryId?: number;
}

export default async function getProductsList(params?: Params) {
  return axios
    .get<IProduct[]>("https://api.escuelajs.co/api/v1/products", { params })
    .then(({ data }) => data);
}

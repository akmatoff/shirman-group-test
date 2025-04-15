import axios from "axios";
import { ICategory } from "../types";

export default async function getCategoriesList() {
  return axios
    .get<ICategory[]>("https://dummyjson.com/products/categories")
    .then(({ data }) => data);
}

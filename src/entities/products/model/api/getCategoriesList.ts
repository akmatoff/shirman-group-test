import axios from "axios";
import { ICategory } from "../types";

export default async function getCategoriesList() {
  return axios
    .get<ICategory[]>("https://api.escuelajs.co/api/v1/categories")
    .then(({ data }) => data);
}

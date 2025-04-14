import axios from "axios";
import { IProduct } from "../types";

export default async function getProductsList() {
    return axios.get<IProduct[]>("https://fakestoreapi.com/products").then(({ data }) => data);
}
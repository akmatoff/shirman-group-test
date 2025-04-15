import axios from "axios";
import { IProductsBaseResponse } from "@/shared/api/types";

interface Params {
  category?: string;
  sortBy?: string;
  order?: string;
}

export default async function getProductsList(params?: Params) {
  return axios
    .get<IProductsBaseResponse>(
      params?.category
        ? `https://dummyjson.com/products/category/${params.category}`
        : "https://dummyjson.com/products",
      {
        params,
      }
    )
    .then(({ data }) => data.products);
}

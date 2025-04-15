import { IProduct } from "@/entities/products/model/types";

export interface IProductsBaseResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

export interface ICategory {
  name: string;
  slug: string;
}

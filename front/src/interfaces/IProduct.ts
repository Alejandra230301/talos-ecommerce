export interface IColor {
    name: string;
    title: string;
    image: string;
    stock: number
  }
  
export interface ICarousel {
    name: string;
    images: string[]
  }
  
export interface IProduct {
    id: number;
    name: string;
    product: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    carousel: ICarousel[];
    color: IColor[];
    stock: number;
  }

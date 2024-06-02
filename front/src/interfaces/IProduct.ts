interface IColor {
    name: string;
    title: string;
    image: string;
    stock: number
  }
  
  interface ICarousel {
    name: string;
    images: string[]
  }
  
  interface IProduct {
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

export default IProduct;
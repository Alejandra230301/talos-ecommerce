import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

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

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    product: "iphone",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://m.media-amazon.com/images/I/51ctDoW+-NL._AC_UF894,1000_QL80_.jpg",
    categoryId: 1,
    carousel: [
      {
        name: "black",
        images: [
          "https://m.media-amazon.com/images/I/51ctDoW+-NL._AC_UF894,1000_QL80_.jpg",
          "https://tiendasishop.com/media/catalog/product/4/_/4_62_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x",
          "https://tiendasishop.com/media/catalog/product/3/_/3_63_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x"]
      },
      {
        name: "white",
        images: [
          "https://www.clevercel.co/cdn/shop/files/iPhone-11_White_Front_1_1200x.jpg?v=1712360008",
          "https://tiendasishop.com/media/catalog/product/m/h/mhdc3lz_a_4.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x",
          "https://tiendasishop.com/media/catalog/product/m/h/mhdc3lz_a_3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x"],
      },
      {
        name: "green",
        images: ["https://m.media-amazon.com/images/I/51nsRc09JAL._AC_UF1000,1000_QL80_.jpg",
          "https://www.alkosto.com/medias/194252098783-004-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTQ4MzZ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3daUzlvWWpjdk1UQXdOVFkyTURZM05EUTJNRFl1YW5CbnxkNmZhYTMxYTM5NTIwMDRiMjQzNzkwN2FhNzhmZmI0NDU1NzQ5OWM1MjMxY2M3NTIzMDUyOTZjYzQ5YWUwMjUw",
          "https://www.alkosto.com/medias/194252098783-003-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTEwNTh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGxNUzlvWkdRdk1UQXdOVFkyTURjek16UTBNekF1YW5Cbnw4NTYyMjQzOTU1MWIyNTc3ZGIzZmE4NGNjNTY1MjVmOTdmNWM3MTU4ZDNhMGVjYzQ5MGY5YmRkMjJiNmQ5YTAw"],
      },
      {
        name: "yellow",
        images: ["https://m.media-amazon.com/images/I/51+9pnwAnyL.jpg",
          "https://www.plug.tech/cdn/shop/products/0016_11-yellow-3_a4523f9a-3a93-4b98-95cf-7d64fa40d226.png?v=1624121658&%3Bwidth=500&em-format=avif&em-width=500",
          "https://http2.mlstatic.com/D_NQ_NP_821884-MLA74782476411_022024-O.webp"],
      },
      {
        name: "red",
        images: ["https://i.ebayimg.com/images/g/GE4AAOSwH6FkC0CJ/s-l1200.jpg",
          "https://http2.mlstatic.com/D_NQ_NP_761957-MLA46114829810_052021-O.webp",
          "https://http2.mlstatic.com/D_NQ_NP_682518-MLA74782715113_022024-O.webp"],
      },
      {
        name: "purple",
        images: ["https://http2.mlstatic.com/D_NQ_NP_958046-MCO76291467537_052024-O.webp",
          "https://http2.mlstatic.com/D_NQ_NP_815368-MCO76291033129_052024-O.webp",
          "https://http2.mlstatic.com/D_NQ_NP_652638-MCO76291389413_052024-O.webp"]
      }
    ],
    color: [
      {
        name: "black",
        title: "Negro",
        image: "https://m.media-amazon.com/images/I/51ctDoW+-NL._AC_UF894,1000_QL80_.jpg",
        stock: 3,

      },
      {
        name: "white",
        title: "Blanco",
        image: "https://www.clevercel.co/cdn/shop/files/iPhone-11_White_Front_1_1200x.jpg?v=1712360008",
        stock: 3,
      },
      {
        name: "green",
        title: "Verde",
        image: "https://m.media-amazon.com/images/I/51nsRc09JAL._AC_UF1000,1000_QL80_.jpg",
        stock: 1,
      },
      {
        name: "yellow",
        title: "Amarillo",
        image: "https://m.media-amazon.com/images/I/51+9pnwAnyL.jpg",
        stock: 1,
      },
      {
        name: "red",
        title: "Rojo",
        image: "https://i.ebayimg.com/images/g/GE4AAOSwH6FkC0CJ/s-l1200.jpg",
        stock: 1,
      },
      {
        name: "purple",
        title: "Morado",
        image: "https://http2.mlstatic.com/D_NQ_NP_958046-MCO76291467537_052024-O.webp",
        stock: 1,
      }
    ],
    stock: 10,
  },
  {
    name: "MacBook Air",
    product: "macbook",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_M3_Space_Gray_PDP_Image_Position_1__COES_2d1632fa-4d88-477c-a96d-ace936382d94_823x.jpg?v=1709647862",
    carousel: [
      {
        name: "dark",
        images: [
          "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Midnight_PDP_Image_Position-1_COES_823x.jpg?v=1700302949",
          "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Midnight_PDP_Image_Position-3_COES_823x.jpg?v=1700302967"],
      },
      {
        name: "grey",
        images: [
          "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Space_Gray_PDP_Image_Position-1_COES_a000762e-c101-4cd6-86f9-8fbbbaa9b884_823x.jpg?v=1700302831",
          "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Space_Gray_PDP_Image_Position-3_COES_6983bc6f-fdcb-4b40-92f7-dffdf8ebcc8c_823x.jpg?v=1700302847"],
      },
      {
        name: "golden",
        images: ["https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_M3_Starlight_PDP_Image_Position_1__COES_fdff1836-6709-46b8-ad8a-ec9166368b0f_823x.jpg?v=1709647909",
        "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_M3_Starlight_PDP_Image_Position_2__COES_bc69d2d6-d002-4c05-9b59-d71fd5f04bc5_823x.jpg?v=1709647911"]
      },
    ],
    color: [
      {
        name: "dark",
        title: "Azul Oscuro",
        image: "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Midnight_PDP_Image_Position-1_COES_823x.jpg?v=1700302949",
        stock: 3,
      },
      {
        name: "grey",
        title: "Plateado",
        image: "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_Space_Gray_PDP_Image_Position-1_COES_a000762e-c101-4cd6-86f9-8fbbbaa9b884_823x.jpg?v=1700302831",
        stock: 3,
      },
      {
        name: "golden",
        title: "Dorado",
        image: "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_M3_Starlight_PDP_Image_Position_1__COES_fdff1836-6709-46b8-ad8a-ec9166368b0f_823x.jpg?v=1709647909",
        stock: 1,
      },
    ],
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    product: "ipad",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-1b_COES_823x.jpg?v=1700284005",
    carousel: [
        {
          name: "silver",
          images: [
            "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-1b_COES_823x.jpg?v=1700284005",
            "https://tiendasishop.com/media/catalog/product/i/p/ipad_pro_wi-fi_12-9_in_6th_generation_silver_pdp_image_position-2_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x"],
        },
        {
          name: "grey",
          images: [
            "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Space_Gray_PDP_Image_Position-1b__MXLA_823x.jpg?v=1700283850",
            "https://falabella.scene7.com/is/image/FalabellaCO/53669139_2?wid=1500&hei=1500&qlt=70"]
        },
    ],
    color: [
      {
        name: "silver",
        title: "Plateado",
        image: "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-1b_COES_823x.jpg?v=1700284005",
        stock: 3,
      },
      {
        name: "grey",
        title: "Gris",
        image: "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Space_Gray_PDP_Image_Position-1b__MXLA_823x.jpg?v=1700283850",
        stock: 3,
      },

    ],
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    product: "watch",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__COES_4bf08f3e-8c39-4f37-8f07-95e05e1148e4_823x.jpg?v=1700344303",
    carousel: [
        {
          name: "dark",
          images: [
            "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__COES_4bf08f3e-8c39-4f37-8f07-95e05e1148e4_823x.jpg?v=1700344303",
            "https://http2.mlstatic.com/D_NQ_NP_876011-MLA72063241830_102023-O.webp"],
        },
        {
          name: "golden",
          images: [
            "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_41mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__COES_f55d075d-a77b-42c1-9269-5ca8fb5b1f30_823x.jpg?v=1700342189",
            "https://http2.mlstatic.com/D_NQ_NP_811124-MLA72062942790_102023-O.webp"],
        },
        {
          name: "rose",
          images: [
            "https://mac-center.com/cdn/shop/files/Watch_S9_GPS_45mm_Pink_Aluminum_Light_Pink_Sport_Band_PDP_Image_Position-1__COES_b22e5f06-490d-4054-a125-92eed1f91f18_823x.jpg?v=1700344723",
            "https://http2.mlstatic.com/D_NQ_NP_689889-MLA72158544313_102023-O.webp"],
        },
    ],
    color: [
      {
        name: "dark",
        title: "Azul Oscuro",
        image: "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__COES_4bf08f3e-8c39-4f37-8f07-95e05e1148e4_823x.jpg?v=1700344303",
        stock: 3,
      },
      {
        name: "golden",
        title: "Dorado",
        image: "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_41mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__COES_f55d075d-a77b-42c1-9269-5ca8fb5b1f30_823x.jpg?v=1700342189",
        stock: 1,
      },
      {
        name: "rose",
        title: "Rosado",
        image: "https://mac-center.com/cdn/shop/files/Watch_S9_GPS_45mm_Pink_Aluminum_Light_Pink_Sport_Band_PDP_Image_Position-1__COES_b22e5f06-490d-4054-a125-92eed1f91f18_823x.jpg?v=1700344723",
        stock: 1,
      },
    ],
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    product: "airpod",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://mac-center.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_823x.jpg?v=1700333479",
    carousel: [
      {
        name: "white",
        images: [
          "https://mac-center.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_823x.jpg?v=1700333479",
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x",
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3_av4.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x"],
      },
    ],
    color: [
      {
        name: "white",
        title: "Blanco",
        image: "https://mac-center.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_823x.jpg?v=1700333479",
        stock: 3,
      },
    ],
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    product: "minipod",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",

    carousel: [
        {
          name: "black",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_833983-MLA45740026604_042021-O.webp"],
        },
        {
          name: "orange",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_859452-MLA74782657839_022024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_602775-MLA74651987652_022024-O.webp"],
        },
        {
          name: "yellow",
          images: ["https://http2.mlstatic.com/D_NQ_NP_767500-MLA74652760162_022024-O.webp",
          "https://http2.mlstatic.com/D_NQ_NP_741288-MLA51699803490_092022-O.webp"],
        },
        {
          name: "grey",
          images: [
            "https://www.apple.com/v/homepod-mini/i/images/overview/static_sound_end__c921y5hqs7ki_large.jpg",
            "https://http2.mlstatic.com/D_NQ_NP_605965-MLA45740026490_042021-O.webp"],
        },
        {
          name: "blue",
          images: ["https://http2.mlstatic.com/D_NQ_NP_930827-MCO74757130485_022024-O.webp",
          "https://http2.mlstatic.com/D_NQ_NP_954440-MLA74779467541_022024-O.webp"]
        },
    ],
    color: [
      {
        name: "black",
        title: "Negro",
        image: "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
        stock: 3,
      },
      {
        name: "orange",
        title: "Naranja",
        image: "https://http2.mlstatic.com/D_NQ_NP_859452-MLA74782657839_022024-O.webp",
        stock: 1,
      },
      {
        name: "yellow",
        title: "Amarillo",
        image: "https://http2.mlstatic.com/D_NQ_NP_767500-MLA74652760162_022024-O.webp",
        stock: 1,
      },
      {
        name: "grey",
        title: "Gris",
        image: "https://www.apple.com/v/homepod-mini/i/images/overview/static_sound_end__c921y5hqs7ki_large.jpg",
        stock: 1,
      },
      {
        name: "blue",
        title: "Azul",
        image: "https://http2.mlstatic.com/D_NQ_NP_930827-MCO74757130485_022024-O.webp",
        stock: 1,
      }
    ],
    categoryId: 6,
    stock: 10,
  },

]

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};

const tempProducto = [
    {
        id: 1,
        name: "iPhone 11",
        product: "iphone",
        price: 699,
        description:
          "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image:
          "https://m.media-amazon.com/images/I/51ctDoW+-NL._AC_UF894,1000_QL80_.jpg",
        categoryId: 1,
        color:[
          {
            name: "black",
            title: "Negro",
            image: "https://m.media-amazon.com/images/I/51ctDoW+-NL._AC_UF894,1000_QL80_.jpg",
            stock: 3
          },
          {
            name: "white",
            title: "Blanco",
            image: "https://www.clevercel.co/cdn/shop/files/iPhone-11_White_Front_1_1200x.jpg?v=1712360008",
            stock: 3
          },
          {
            name: "green",
            title: "Verde",
            image: "https://m.media-amazon.com/images/I/51nsRc09JAL._AC_UF1000,1000_QL80_.jpg",
            stock: 1
          },
          {
            name: "yellow",
            title: "Amarillo",
            image: "https://m.media-amazon.com/images/I/51+9pnwAnyL.jpg",
            stock: 1
          },
          {
            name: "red",
            title: "Rojo",
            image: "https://i.ebayimg.com/images/g/GE4AAOSwH6FkC0CJ/s-l1200.jpg",
            stock: 1
          },
          {
            name: "purple",
            title: "Morado",
            image: "https://m.media-amazon.com/images/I/51c1KR88-tL.jpg",
            stock: 1
          }
        ],
        stock: 10,
      },
      {
        id: 2,
        name: "MacBook Air",
        product: "macbook",
        price: 999,
        description:
          "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Air_13_in_M3_Space_Gray_PDP_Image_Position_1__COES_2d1632fa-4d88-477c-a96d-ace936382d94_823x.jpg?v=1709647862",
          color:[
            {
              name: "dark-blue",
              title: "Azul Oscuro",
              image: "https://api-prd.ynk.cl/medias/REIFSTORE-MLY33CI-A-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wzMDgwNjN8aW1hZ2UvanBlZ3xhRFExTDJneFlTODVNak13TWpNMU5qTXhOalEyTDFKRlNVWlRWRTlTUlY5TlRGa3pNME5KSTBGZlZrbEZWekV1YW5CbnwyNjk0ZDE5M2E0MWQyODdiNjFiNTBiNjY1NTAxZGRhNGFiZjVjNDY4MzgxMzZjMDQ0N2I1NTJhMmYyYzEyZTc4",
              stock: 3
            },
            {
              name: "grey",
              title: "Plateado",
              image: "https://mac-center.com/cdn/shop/files/MacBook_Air_15_in_M3_Silver_PDP_Image_Position_1__COES.jpg?v=1709646627",
              stock: 3
            },
            {
              name: "golden",
              title: "Dorado",
              image: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/z15y00102-macbook-air-yildiz-isigi-8cpu-m2-256-ssd-136-638255374286527466.jpg",
              stock: 1
            },
          ],
        categoryId: 2,
        stock: 10,
      },
      {
        id: 3,
        name: "iPad Pro",
        product: "ipad",
        price: 799,
        description:
          "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image:
          "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-1b_COES_823x.jpg?v=1700284005",
          color:[
            {
              name: "silver",
              title: "Plateado",
              image: "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-1b_COES_823x.jpg?v=1700284005",
              stock: 3
            },
            {
              name: "grey",
              title: "Azul Oscuro",
              image: "https://mac-center.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Space_Gray_PDP_Image_Position-1b__MXLA_823x.jpg?v=1700283850",
              stock: 3
            },

          ],
        categoryId: 3,
        stock: 10,
      },
      {
        id: 4,
        name: "Apple Watch Series 6",
        product: "watch",
        price: 399,
        description:
          "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image:
          "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__COES_4bf08f3e-8c39-4f37-8f07-95e05e1148e4_823x.jpg?v=1700344303",
        color:[
            {
              name: "dark-blue",
              title: "Azul Oscuro",
              image: "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__COES_4bf08f3e-8c39-4f37-8f07-95e05e1148e4_823x.jpg?v=1700344303",
              stock: 3
            },
            {
              name: "golden",
              title: "Dorado",
              image: "https://mac-center.com/cdn/shop/files/Watch_S9_LTE_41mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__COES_f55d075d-a77b-42c1-9269-5ca8fb5b1f30_823x.jpg?v=1700342189",
              stock: 1
            },
            {
              name: "rose",
              title: "Rosado",
              image: "https://mac-center.com/cdn/shop/files/Watch_S9_GPS_45mm_Pink_Aluminum_Light_Pink_Sport_Band_PDP_Image_Position-1__COES_b22e5f06-490d-4054-a125-92eed1f91f18_823x.jpg?v=1700344723",
              stock: 1
            },
          ],
        categoryId: 4,
        stock: 10,
      },
      {
        id: 5,
        name: "AirPods Pro",
        product: "airpod",
        price: 249,
        description:
          "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image:
          "https://mac-center.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_823x.jpg?v=1700333479",
        color:[
            {
              name: "white",
              title: "Blanco",
              image: "https://mac-center.com/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global_823x.jpg?v=1700333479",
              stock: 3
            },
        ],
        categoryId: 5,
        stock: 10,
      },
      {
        id: 6,
        name: "HomePod mini",
        product: "minipod",
        price: 99,
        description:
          "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image:
          "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
          color:[
            {
              name: "black",
              title: "Negro",
              image: "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
              stock: 3
            },
            {
              name: "orange",
              title: "Naranja",
              image: "https://http2.mlstatic.com/D_NQ_NP_859452-MLA74782657839_022024-O.webp",
              stock: 1
            },
            {
              name: "yellow",
              title: "Amarillo",
              image: "https://http2.mlstatic.com/D_NQ_NP_767500-MLA74652760162_022024-O.webp",
              stock: 1
            },
            {
              name: "grey",
              title: "Gris",
              image: "https://www.apple.com/v/homepod-mini/i/images/overview/static_sound_end__c921y5hqs7ki_large.jpg",
              stock: 1
            },
            {
              name: "blue",
              title: "Azul",
              image: "https://http2.mlstatic.com/D_NQ_NP_930827-MCO74757130485_022024-O.webp",
              stock: 1
            }
          ],
        categoryId: 6,
        stock: 10,
      },
    
]

export default tempProducto
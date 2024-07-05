// import { AppDataSource } from "../config/dataSource";
// import { Color } from "../entities/Color";
// import { ColorRespository } from "../repositories/color.repository";

// export interface IColor {
//     name: string;
//     title: string;
//     image: string;
//     stock: number
//   }

// const colorsToPreLoad: IColor[] = [
//     {
//         name: "black",
//         title: "Negro",
//         image: "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
//         stock: 3,
//       },
//       {
//         name: "orange",
//         title: "Naranja",
//         image: "https://http2.mlstatic.com/D_NQ_NP_859452-MLA74782657839_022024-O.webp",
//         stock: 1,
//       },
//       {
//         name: "yellow",
//         title: "Amarillo",
//         image: "https://http2.mlstatic.com/D_NQ_NP_767500-MLA74652760162_022024-O.webp",
//         stock: 1,
//       },
//       {
//         name: "grey",
//         title: "Gris",
//         image: "https://www.apple.com/v/homepod-mini/i/images/overview/static_sound_end__c921y5hqs7ki_large.jpg",
//         stock: 1,
//       },
//       {
//         name: "blue",
//         title: "Azul",
//         image: "https://http2.mlstatic.com/D_NQ_NP_930827-MCO74757130485_022024-O.webp",
//         stock: 1,
//       }
// ];

// export const preLoadColor = async () => {
//     const categories = await ColorRespository.find();
//     if (!categories.length) await AppDataSource.createQueryBuilder().insert().into(Color).values(colorsToPreLoad).execute();
//     console.log('Colors preloaded');
// }
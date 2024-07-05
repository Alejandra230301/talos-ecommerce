// import {
//     Column,
//     Entity,
//     JoinColumn,
//     ManyToMany,
//     ManyToOne,
//     PrimaryGeneratedColumn,
//   } from "typeorm";
// import { Product } from "./Product";
  
//   export interface IColor {
//     name: string;
//     title: string;
//     image: string;
//     stock: number
//   }
  
//   @Entity({ name: "color" })
//   export class Color {
//     @PrimaryGeneratedColumn()
//     id: number;
  
//     @Column()
//     name: string;
  
//     @Column()
//     title: string;
  
//     @Column()
//     image: string;
  
//     @Column()
//     stock: number;

//     @ManyToOne(() => Product, (product) => product.color)
//     @JoinColumn({ name: "productId" })
//     product: Product;

//   }
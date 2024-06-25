import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Category } from "./Category";

export interface IColor {
  name: string;
  title: string;
  image: string;
  stock: number
}

interface ICarousel {
  name: string;
  images: string[]
}

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  product: string;

  @Column()
  route: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image: string;

  @Column()
  categoryId: number;

  @Column({ type: 'simple-json' })
  carousel: ICarousel[];

  @Column({ type: 'simple-json' })
  color: IColor[];

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "categoryId" })
  category: Category;
}

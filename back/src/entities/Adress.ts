import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { User } from "./User";
  
  // status: pending, approved, rejected
  
  @Entity({ name: "adress" })
  export class Adress {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    adress: string;

    @Column()
    phone: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    city: string;
  
    @Column()
    code: string;
  
    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: "userId" })
    user: User;
}
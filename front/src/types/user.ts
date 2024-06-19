import { IProduct } from "@/interfaces/IProduct"

interface Credentials {
    id: number,
    password: string
}

export interface Orders{
    id: number,
    status: string,
    date: Date,
    user: User,
    products: IProduct[]
}

export interface User{
    credential: Credentials,
    email: string,
    id: number,
    name: string,
    orders: Orders,
    role:string
}

export interface CreateOrder{
    userId: number;
    products: number[];
}
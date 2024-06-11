interface Credentials {
    id: number,
    password: string
}

export interface Orders{
    id: number
}

export interface User{
    credential: Credentials,
    email: string,
    id: number,
    name: string,
    orders: Orders,
    role:string
}
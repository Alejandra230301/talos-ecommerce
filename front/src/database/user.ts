import { IProduct } from "@/interfaces/IProduct";
import { LoginProps, RegisterProps } from "@/types"
import { CreateOrder, Orders } from "@/types/user";

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function postRegister(registerData : RegisterProps) {
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(registerData)
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Error desconocido');
        }
        const userData = await res.json()
        return userData
    } catch (error: any) {
        throw new Error(error.message || 'Error desconocido');
    }
}

export async function postLogin(loginData : LoginProps) {
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Error desconocido');
        }
        const userData = await res.json()
        return userData
    } catch (error: any) {
        throw new Error(error.message || 'Error desconocido');
    }
}

export async function getOrders(token: string) {
    console.log(token)
    try {
        const res = await fetch(`${apiUrl}/users/orders`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                Authorization: token,
            }
           
        })
        const orders : Orders[] = await res.json()
        console.log(orders)
        return orders
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}

export async function postOrders(token: string, product: number[]) {
    try {
        const res = await fetch(`${apiUrl}/orders`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                products: product
            })
        })
        const order = await res.json()
        return order
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}
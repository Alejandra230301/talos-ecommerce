import { IColor, IProduct } from "@/interfaces/IProduct"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts() {
    try {
        const res = await fetch(`${apiUrl}/products`, {
            method: 'GET',
            cache: 'no-cache'
        })
        const products : IProduct[] = await res.json()
        return products
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}

export async function getOneProduct(name : string) {
    console.log(name)
    try {
        const res = await fetch(`${apiUrl}/products/${name}`, {
            method: 'GET',
            next: {revalidate: 3600}
        })
        const product : IProduct = await res.json()
        console.log(product)
        return product
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}

export async function putStock(name : string, color : IColor) {
    console.log(color)
    try {
        const res = await fetch(`${apiUrl}/products/stock/${name}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({color})
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Error desconocido');
        }
        const product : IProduct = await res.json()
        console.log(product)
        return true
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
        return false
    }
}
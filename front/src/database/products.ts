import { IProduct } from "@/interfaces/IProduct"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts() {
    try {
        const res = await fetch(`${apiUrl}/products`, {
            method: 'GET',
            next: {revalidate: 3600}
        })
        const products : IProduct[] = await res.json()
        return products
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}

export async function getOneProduct(name : string) {
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
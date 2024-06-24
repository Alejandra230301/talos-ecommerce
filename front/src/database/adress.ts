import { AdressProps } from "@/types/adress";

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function postAdress(token: string, adressData : AdressProps) {
    try {
        const res = await fetch(`${apiUrl}/adress`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(adressData)
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

export async function putAdress(token: string, adressData : AdressProps, adressId: string) {
    console.log(adressId)
    console.log(adressData)
    try {
        const res = await fetch(`${apiUrl}/adress/${adressId}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(adressData)
        })
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Error desconocido');
        }
        const userAdress = await res.json()
        console.log(userAdress)
        return userAdress
    } catch (error: any) {
        throw new Error(error.message || 'Error desconocido');
    }
}

export async function getAdress(token: string) {
    try {
        const res = await fetch(`${apiUrl}/users/adress`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                Authorization: token,
            }
        })
        const adress : AdressProps[] = await res.json()
        return adress
    } catch (error) {
        console.log("Hubo un error")
        console.log(error)
    }
}

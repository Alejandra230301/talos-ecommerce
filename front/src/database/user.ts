import { LoginProps, RegisterProps } from "@/types"

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
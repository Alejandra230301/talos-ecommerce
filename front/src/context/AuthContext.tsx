'use client'
import React, {useContext, createContext, useState, useEffect} from 'react'

//
interface AuthContextProps {
    userToken: string | null;
    setUserToken: (userToken: any) => void
    userData: any;
    setUserData: (userData: any) => void
}

//Se crea el contexto con las propiedades que se requieren
const AuthContext = createContext<AuthContextProps>({
    userToken: null,
    setUserToken: () => {},
    userData: null,
    setUserData: () => {}
})

interface AuthProviderProps {
    children: React.ReactElement
}

//Todos los hijos se enteraran del contexto
export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {
    const [userToken, setUserToken] = useState<string | null>(null)
    const [userData, setUserData] = useState<string | null>(null)
    useEffect(() => {
        if(userToken && userData){
            localStorage.setItem("userToken", JSON.stringify(userToken))
            localStorage.setItem("userData", JSON.stringify(userData))
        }

    }, [userToken])

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken : string | null = localStorage.getItem("userToken")
            const userData : string | null = localStorage.getItem("userData")
            setUserToken(userToken)
            setUserData(userData)
        }
    }, [])

    return (
        <AuthContext.Provider value={{userToken, setUserToken, userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
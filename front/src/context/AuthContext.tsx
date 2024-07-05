'use client'
import { User } from '@/types/user';
import React, {useContext, createContext, useState, useEffect} from 'react'

//
interface AuthContextProps {
    userToken: string | null;
    setUserToken: (userToken: string | null) => void
    userData: User;
    setUserData: (userData: User) => void
    saveToken: (newToken: string, newData: string) => void
    isLoading: boolean
}

//Se crea el contexto con las propiedades que se requieren
const AuthContext = createContext<AuthContextProps>({
    userToken: null,
    setUserToken: () => {},
    userData: {},
    setUserData: () => {},
    saveToken: () => {},
    isLoading: true
})

interface AuthProviderProps {
    children: React.ReactElement
}

//Todos los hijos se enteraran del contexto
export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {
    const [userToken, setUserToken] = useState<string | null>(null)
    const [userData, setUserData] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (userToken !== null) {
            localStorage.setItem('userToken', userToken);
        }
    }, [userToken]);

    useEffect(() => {
        if (userData !== null) {
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]);

    useEffect(() => {
        const tempToken : string | null = localStorage.getItem("userToken")
        const tempData : string | null = localStorage.getItem("userData")
        tempToken && setUserToken(tempToken)
        tempData && setUserData(JSON.parse(tempData))
        setIsLoading(false)
    }, [])

    const saveToken = (newToken : string, newData: any) => {
        // setUserToken(newToken)
        // setUserData(newData)
        // localStorage.setItem("userToken", JSON.stringify(newToken))
        // localStorage.setItem("userData", JSON.stringify(newData))
    }

    return (
        <AuthContext.Provider value={{userToken, setUserToken, userData, setUserData, saveToken, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
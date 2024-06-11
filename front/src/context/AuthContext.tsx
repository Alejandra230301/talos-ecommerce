// 'use client'
// import React, {useContext, createContext, useState, useEffect} from 'react'

// interface AuthContextProps {
//     userData: any;
//     setUserData: (userData: any) => void
// }

// const AuthContext = createContext({
//     userData: null,
//     setUserData: () => {

//     }
// })

// interface AuthProviderProps {
//     children: React.ReactElement
// }

// export const AuthProvider = ({children}: any) => {
//     const [userData, setUserData] = useState(null)
    
//     return (
//         <AuthContext.Provider value={{userData, setUserData}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

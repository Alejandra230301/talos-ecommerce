"use client";
import Login from '@/components/primary/Login';
import { validateLogin } from '@/helpers/validateLogin';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'


const page = () => {

    const [token, setToken] = useState<string | null>()

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken : string | null = localStorage.getItem("userToken")
            setToken(userToken)
        }
      }, [setToken])

    return (
        <>
        <Login setToken={setToken}/>
        </>
    )
}

export default page

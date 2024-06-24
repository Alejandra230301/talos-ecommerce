'use client';
import { validateLogin } from '@/helpers/validateLogin';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { postLogin } from '@/database/user';
import { LoginErrorProps, LoginProps } from '@/types';
import { useAuth } from '@/context/AuthContext';


const Login  = () => {
    const router = useRouter()
    const {userToken, setUserToken, userData, setUserData, saveToken} = useAuth()
    const [userTemp, setInfoTemp] = useState<LoginProps>({
        email: '', password: ''
    })

    const [validateErrors, setValidateErrors] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [errors, setErrors] = useState<LoginErrorProps>({ ...userTemp })

    useEffect(() => {
        setErrors(validateLogin(userTemp));
    }, [userTemp]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInfoTemp({
            ...userTemp,
            [name]: value
        })
        if (userTemp.email != '' && userTemp.password != '') {
            setDisabled(false)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (errors.email != '' || errors.password != '') {
            setValidateErrors(true)
        }
        if (errors.email === '' && errors.password === '') {
            console.log("entro")
            sendDataLogin()
        }
    }

    const sendDataLogin = async () => {
        try {
            const res = await postLogin(userTemp);
            console.log(res);
            // saveToken(res.token, res.user)
            setUserToken(res.token)
            setUserData(res.user)
            router.push("/");
        } catch (error) {
            alert(error)
        }
}

return (
    <div className='w-full lg:w-3/4 mx-auto my-24'>
        <h2 className='text-orange-950 text-4xl font-bold text-center'>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className='w-3/5 mx-auto my-12'>
                <div className="relative z-0 w-full mb-5 group">
                    <label className="font-bold text-teal-950">Correo electronico</label>
                    <input type="email"
                        onChange={handleChange}
                        name="email"
                        className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="Ingresa tu correo"
                    />
                    {validateErrors &&
                        <p className="text-orange-500 font-bold">{errors.email}</p>
                    }
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label className="font-bold text-teal-950">Contraseña</label>
                    <input type="password"
                        onChange={handleChange}
                        name="password"
                        className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="Ingresa tu contraseña"
                    />
                    {validateErrors &&
                        <p className="text-orange-500 font-bold">{errors.password}</p>
                    }
                </div>
                <button type="submit" className="text-white font-bold disabled:text-gray-300 bg-orange-500 disabled:bg-orange-200 rounded-lg w-full px-5 py-2 text-center ">Iniciar sesión</button>
            </div>
        </form>
        <div className='w-3/5 mx-auto'>
            <h2 className='text-orange-950 text-3xl font-bold text-center mb-5'>¿No tienes cuenta?</h2>
            <Link href='/register' className="text-white font-bold bg-green-500 rounded-lg block w-full px-5 py-2 text-center ">
                Crear cuenta
            </Link>
        </div>
    </div>
)
}

export default Login



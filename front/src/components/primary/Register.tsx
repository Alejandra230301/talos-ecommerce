'use client';
import { postRegister } from '@/database/user';
import { validateRegister } from '@/helpers/validateLogin';
import { RegisterErrorProps, RegisterProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Register = () => {

    const router = useRouter()
    const [registerTemp, setRegisterTemp] = useState<RegisterProps>({
        name: '', email: '', password: '', confirm: ''
    })

    const [validateErrors, setValidateErrors] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [errors, setErrors] = useState<RegisterErrorProps>({ ...registerTemp })

    useEffect(() => {
        setErrors(validateRegister(registerTemp));

      }, [registerTemp]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = event.target;
        setRegisterTemp({
            ...registerTemp,
            [name]: value
        })
        if(registerTemp.name != '' && registerTemp.email != '' && registerTemp.password != '' && registerTemp.confirm != ''){
            setDisabled(false)
        }
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(errors)
        if(errors.name != ''  || errors.email != '' || errors.password != '' || errors.confirm != ''){
            setValidateErrors(true)
        }
        if(errors.name === '' && errors.email === '' && errors.password === '' && errors.confirm === ''){
            console.log("entro")
            postRegister(registerTemp)
            .then((res) => {
                router.push("/login")
            })
        }
    }
    return (
        <div className='w-full lg:w-3/4 mx-auto my-24'>
            <h2 className='text-orange-950 text-4xl font-bold text-center'>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className='w-3/5 mx-auto my-12'>
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="font-bold text-teal-950">Nombre completo</label>
                        <input type="text"
                            onChange={handleChange}
                            name="name"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu nombre"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.name}</p>
                        }
                    </div>
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
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="font-bold text-teal-950">Confirmar contraseña</label>
                        <input type="password"
                            onChange={handleChange}
                            name="confirm"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Confirma tu contraseña"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.confirm}</p>
                        }
                    </div>
                    <button type="submit"
                    disabled={disabled} className="text-white disabled:text-gray-300 bg-green-500 disabled:bg-green-200 font-bold rounded-lg w-full px-5 py-2 text-center ">Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default Register


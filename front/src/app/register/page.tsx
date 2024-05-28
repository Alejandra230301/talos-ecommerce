'use client';
import { validateRegister } from '@/helpers/validateLogin';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [registerTemp, setRegisterTemp] = useState({
        first_name: '', last_name: '', email: '', password: '', confirm: ''
    })

    const [validateErrors, setValidateErrors] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({ ...registerTemp })

    useEffect(() => {
        setErrors(validateRegister(registerTemp));

      }, [registerTemp]);

    const handleChange = (event: any) => {
        
        const { name, value } = event.target;
        setRegisterTemp({
            ...registerTemp,
            [name]: value
        })
        if(registerTemp.first_name != '' && registerTemp.last_name != '' && registerTemp.email != '' && registerTemp.password != '' && registerTemp.confirm != ''){
            setDisabled(false)
        }
        
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(errors.first_name != '' || errors.last_name != '' || errors.email != '' || errors.password != '' || errors.confirm != ''){
            setValidateErrors(true)
        }
        if(errors.first_name === '' && errors.last_name === '' && errors.email === '' && errors.password === '' && errors.confirm === ''){
            console.log("Enviado el registro")
        }
    }
    return (
        <div className='w-full lg:w-3/4 mx-auto my-24'>
            <h2 className='text-orange-950 text-4xl font-bold text-center'>Registrarse</h2>
            <form>
                <div className='w-3/5 mx-auto my-12'>
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="font-bold text-teal-950">Nombre</label>
                        <input type="text"
                            onChange={handleChange}
                            name="first_name"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu nombre"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.first_name}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="font-bold text-teal-950">Apellido</label>
                        <input type="text"
                            onChange={handleChange}
                            name="last_name"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu apellido"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.last_name}</p>
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
                    <button onClick={handleSubmit} 
                    disabled={disabled} type="submit" className="text-white disabled:text-gray-300 bg-green-500 disabled:bg-green-200 font-bold rounded-lg w-full px-5 py-2 text-center ">Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default page

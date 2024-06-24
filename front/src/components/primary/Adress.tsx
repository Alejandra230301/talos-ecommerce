'use client';
import { useAuth } from '@/context/AuthContext';
import { postAdress } from '@/database/adress';
import { validateAdress } from '@/helpers/validateAdress';
import { AdressProps } from '@/types/adress';
import React, { useEffect, useState } from 'react'

const Adress = ({changeViewAdress} : any) => {

    const {userToken, setUserToken} = useAuth()
    const [adressTemp, setRegisterTemp] = useState<AdressProps>({
        adress: '', phone: '', country: '', city: '', code: '', state:''
    })

    const [validateErrors, setValidateErrors] = useState<boolean>(false)
    const [errors, setErrors] = useState<AdressProps>({ ...adressTemp })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterTemp({
            ...adressTemp,
            [name]: value
        })
    }

    useEffect(() => {
        setErrors(validateAdress(adressTemp));

      }, [adressTemp]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(errors)
        if(errors.adress != ''  || errors.phone != '' || errors.country != '' || errors.city != '' || errors.state != '' || errors.code != ''){
            setValidateErrors(true)
        }
        if(errors.adress === ''  && errors.phone === '' && errors.country === '' && errors.city === '' && errors.state === '' && errors.code === ''){
            console.log("entro")
            postAdress(userToken!, adressTemp)
            .then((res) => {
                console.log(res)
            })
            changeViewAdress(false)
        }
    }

    return (
        <div className='mx-8 md:w-4/5 lg:w-3/5 flex flex-col md:mx-auto '>
            <h2 className=' text-2xl font-bold text-orange-950 mt-5'>Nueva dirección</h2>
            <form onSubmit={handleSubmit}>
                <div className=' mx-auto my-6 flex flex-col md:flex-row flex-wrap justify-between'>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">Direccion</label>
                        <input type="text"
                            onChange={handleChange}
                            name="adress"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu dirección"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.adress}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">Teléfono</label>
                        <input type="number"
                            onChange={handleChange}
                            name="phone"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu teléfono"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.phone}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">País</label>
                        <input type="text"
                            onChange={handleChange}
                            name="country"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu ciudad"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.country}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Estado</label>
                        <input type="text"
                            onChange={handleChange}
                            name="state"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu estado"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.state}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Ciudad</label>
                        <input type="text"
                            onChange={handleChange}
                            name="city"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu ciudad"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.city}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Código postal</label>
                        <input type="number"
                            onChange={handleChange}
                            name="code"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu ciudad"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{errors.code}</p>
                        }
                    </div>
                    <button type="submit" className="text-white disabled:text-gray-300 bg-green-500 disabled:bg-green-200 font-bold rounded-lg w-full px-5 py-2 text-center ">Agregar dirección</button>
                </div>
            </form>
        </div>
    )
}

export default Adress

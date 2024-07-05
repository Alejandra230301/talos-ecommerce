'use client';
import { useAuth } from '@/context/AuthContext';
import { postAdress, putAdress } from '@/database/adress';
import { validateAdress } from '@/helpers/validateAdress';
import { AdressProps } from '@/types/adress';
import React, { useEffect, useState } from 'react'

interface AdressProps {
    typeAdress: string,
    changeViewAdress: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fullAdress: AdressProps
    // category : {
    //   id: number,
    //   name: string
    // }
    // handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Adress : React.FC<AdressProps> = ({ changeViewAdress, typeAdress, fullAdress }: any) => {

    const { userToken, setUserToken } = useAuth()
    const [adressTemp, setAdressTemp] = useState<AdressProps>({
        adress: '', phone: '', country: '', city: '', code: '', state: ''
    })

    const [adressEdit, setAdressEdit] = useState<AdressProps>({
        adress: fullAdress?.adress, phone: fullAdress?.phone, country: fullAdress?.country, city: fullAdress?.city, code: fullAdress?.code, state: fullAdress?.state
    })

    const [validateErrors, setValidateErrors] = useState<boolean>(false)
    const [errors, setErrors] = useState<AdressProps>({ ...adressTemp })
    const [errorsEdit, setErrorsEdit] = useState<AdressProps>({ ...adressTemp })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value)
        if (typeAdress === 'new') {
            setAdressTemp((adressTemp) => ({
                ...adressTemp,
                [name]: value
            }))
        }
        else {
            console.log(`Cambiando ${name} a ${value}`);
            setAdressEdit((adressEdit) => ({
                ...adressEdit,
                [name]: value
            }))
        }
    }

    useEffect(() => {
        setErrors(validateAdress(adressTemp));
        setErrorsEdit(validateAdress(adressEdit));
    }, [adressTemp, adressEdit]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(errors)
        if (typeAdress === 'new') {
            if (errors.adress != '' || errors.phone != '' || errors.country != '' || errors.city != '' || errors.state != '' || errors.code != '') {
                setValidateErrors(true)
            }
            if (errors.adress === '' && errors.phone === '' && errors.country === '' && errors.city === '' && errors.state === '' && errors.code === '') {
                console.log("entro")
                postAdress(userToken!, adressTemp)
                    .then((res) => {
                        console.log(res)
                    })
                changeViewAdress('')
            }
        }
        else {
            if (errorsEdit.adress != '' || errorsEdit.phone != '' || errorsEdit.country != '' || errorsEdit.city != '' || errorsEdit.state != '' || errorsEdit.code != '') {
                setValidateErrors(true)
            }
            if (errorsEdit.adress === '' && errorsEdit.phone === '' && errorsEdit.country === '' && errorsEdit.city === '' && errorsEdit.state === '' && errorsEdit.code === '') {
                console.log("entro")
                putAdress(userToken!, adressEdit, adress?.id)
                    .then((res) => {
                        console.log(res)
                    })
                changeViewAdress('')
            }
        }
    }

    return (
        <div className='mx-8 md:w-4/5 lg:w-3/5 flex flex-col md:mx-auto '>
            <h2 className=' text-2xl font-bold text-orange-950 mt-5'>Nueva dirección</h2>
            <form onSubmit={handleSubmit}>
                <div className=' mx-auto my-6 flex flex-col md:flex-row flex-wrap justify-between'>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">Direccion</label>
                        <input
                            type="text"
                            defaultValue={fullAdress?.adress}
                            onChange={handleChange}
                            name="adress"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                        />
                        {validateErrors && 
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.adress : errorsEdit.adress}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">Teléfono</label>
                        <input type="number"
                            onChange={handleChange}
                            defaultValue={fullAdress?.phone}
                            name="phone"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Ingresa tu teléfono"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.phone : errorsEdit.phone}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group ">
                        <label className="font-bold text-teal-950">País</label>
                        <input type="text"
                            onChange={handleChange}
                            defaultValue={fullAdress?.country}
                            name="country"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu país"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.country : errorsEdit.country}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Estado</label>
                        <input type="text"
                            onChange={handleChange}
                            defaultValue={fullAdress?.state}
                            name="state"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu estado"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.state : errorsEdit.state}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Ciudad</label>
                        <input type="text"
                            onChange={handleChange}
                            defaultValue={fullAdress?.city}
                            name="city"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu ciudad"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.city : errorsEdit.city}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full md:w-5/12 mb-5 group">
                        <label className="font-bold text-teal-950">Código postal</label>
                        <input type="number"
                            onChange={handleChange}
                            defaultValue={fullAdress?.code}
                            name="code"
                            className="block py-2.5 px-0 w-full text-sm text-teal-950 bg-transparent border-0 border-b-2 placeholder-teal-950  border-teal-950 appearance-none focus:outline-none focus:ring-0  peer"
                            placeholder="Escoge tu código postal"
                        />
                        {validateErrors &&
                            <p className="text-orange-500 font-bold">{typeAdress === 'new' ? errors.code : errorsEdit.code}</p>
                        }
                    </div>
                    <button type="submit" className="text-white disabled:text-gray-300 bg-green-500 disabled:bg-green-200 font-bold rounded-lg w-full px-5 py-2 text-center ">Agregar dirección</button>
                </div>
            </form>
        </div>
    )
}

export default Adress

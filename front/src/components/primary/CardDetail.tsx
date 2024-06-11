"use client";
import React, { useEffect, useState } from 'react'
import ColorChoose from '../secondary/ColorChoose'
import GenericInfoCard from '../secondary/GenericInfoCard';
import { useRouter } from 'next/navigation';
import { ICarousel, IColor, IProduct } from '@/interfaces/IProduct';

const CardDetail = ({producto}: { producto: IProduct}) => {
    const router = useRouter()
    const { id, name, product, price, description, image, stock, color, carousel } = producto
    const [colorChoose, setColorChoose] = useState('Elige un color')
    const [colorCarousel, setColorCarousel] = useState('black')
    const [imageColor, setImageColor] = useState(image)
    const [token, setToken] = useState<string | null>()

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken : string | null = localStorage.getItem("userToken")
            setToken(userToken)
        }
      }, [])

    const colorProducto = (color: string, imageColor: string, nameColor : string) => {
        setColorChoose(color)
        setColorCarousel(nameColor)
        setImageColor(imageColor)
    }

    const handleCart = (producto: IProduct) => {
        if(token){
            router.push("/cart")
        }
        else{
            alert("Debes iniciar sesión para agregar productos al carrito")
        }
    }

    return (
        <div className='flex flex-col lg:flex-row bg-white'>
            {/* Carrusel lateral */}
            <div className='flex flex-row lg:flex-col my-auto'>
                <div className="mx-12 w-full lg:w-24">
                    <ul className="flex flex-row lg:flex-col justify-center lg:justify-around">
                        {
                            carousel?.map((element: ICarousel) => {
                                    return (
                                        element?.name === colorCarousel &&
                                        element?.images?.map((e: string) => {
                                            return (
                                                <>
                                                    <li className='mx-3 sm:mx-auto mb-3 sm:mb-6 lg:mb-0'>
                                                        <button onClick={() => setImageColor(e)} className=" rounded-full sm:rounded-lg border bg-green-300 sm:bg-white p-3 my-3 xsm:w-full xsm:h-auto">
                                                        <img className="sm:w-24 sm:h-24 object-contain hidden sm:block" src={e} />
                                                        </button>
                                                    </li>
                                                </>
                                            )
                                        })
                                    )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* Imagen */}
            <div className='flex w-full'>
                <img src={imageColor} className='object-contain h-60 w-96 my-auto mx-auto'>
                </img>
            </div>
            {/* Info */}
            <div className='flex flex-col mx-8 lg:mx-24 my-12'>
                <h2 className='text-orange-950 text-4xl font-bold my-2'>{name}</h2>
                {/* <p className='text-orange-950'>{`Codigo: ${id}`}</p> */}
                <p className='text-orange-950 text-3xl font-bold my-4'>{`$${price}`}</p>
                <p className='text-orange-950'>{description}</p>
                <div className='my-4'>
                    <p className='text-orange-950 font-bold'>{`Color: ${colorChoose}`}</p>
                    <ul className='flex flex-row flex-wrap'>
                        {
                            color?.map((e: IColor) => {
                                return (
                                    <>
                                        <li className='mx-2'>
                                            <ColorChoose color={e} colorProducto={colorProducto} product={product} />
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <GenericInfoCard />
                <div className='mt-2'>
                    <button onClick={() => handleCart(producto)} className='bg-emerald-700 rounded-md p-2 my-2 w-full text-white'>Comprar ahora</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetail

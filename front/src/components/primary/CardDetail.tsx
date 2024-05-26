"use client";
import React, { useState } from 'react'
import ColorChoose from '../secondary/ColorChoose'
import GenericInfoCard from '../secondary/GenericInfoCard';

const CardDetail = ({ producto }: any) => {
    const { id, name, product, price, description, image, stock, color, carousel } = producto
    console.log(carousel)
    const [colorChoose, setColorChoose] = useState('Elige un color')
    const [colorCarousel, setColorCarousel] = useState('black')
    const [imageColor, setImageColor] = useState(image)

    const colorProducto = (color: string, imageColor: string, nameColor : string) => {
        setColorChoose(color)
        setColorCarousel(nameColor)
        setImageColor(imageColor)
    }

    return (
        <div className='flex flex-row bg-white'>
            {/* Carrusel lateral */}
            <div className='flex flex-col my-auto'>
                <div className="mx-12 w-24">
                    <ul className="flex flex-row justify-around flex-wrap">
                        {
                            carousel?.map((element: any) => {
                                    return (
                                        element?.[`${colorCarousel}`]?.map((e: any) => {
                                            console.log(e)
                                            return (
                                                <>
                                                    <li>
                                                        <button onClick={() => setImageColor(e)}className="rounded-lg border bg-white p-3 my-3 ">
                                                        <img className="w-24 h-24 object-contain" src={e} />
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
            <div className='flex flex-col mx-24 my-12'>
                <h2 className='text-orange-950 text-4xl font-bold my-2'>{name}</h2>
                <p className='text-orange-950'>{`Codigo: ${id}`}</p>
                <p className='text-orange-950 text-3xl font-bold my-4'>{`$${price}`}</p>
                <p className='text-orange-950'>{description}</p>
                <div className='my-4'>
                    <p className='text-orange-950 font-bold'>{`Color: ${colorChoose}`}</p>
                    <ul className='flex flex-row flex-wrap'>
                        {
                            color?.map((e: any) => {
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
                    <button className='bg-emerald-700 rounded-md p-2 my-2 w-full text-white'>Comprar ahora</button>
                    <button className='border border-emerald-700 rounded-md p-2 my-2 w-full text-orange-950'>Más información</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetail
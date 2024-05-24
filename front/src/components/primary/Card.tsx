"use client";
import React, { useState } from 'react'
import ColorChoose from '../secondary/ColorChoose'
import GenericInfoCard from '../secondary/GenericInfoCard';

const Card = ({ producto }: any) => {
    const { name, product, price, description, image, stock, color } = producto
    const [colorChoose, setColorChoose] = useState('Elige un color')
    const [imageColor, setImageColor] = useState(image)

    const colorProducto = (color: string, imageColor : string) => {
        setColorChoose(color)
        setImageColor(imageColor)
    }

    return (
        <div className='bg-white xsm:w-96 w-80 m-3'>
            <div className='flex w-full'>
                <img src={imageColor} className='object-contain h-60 w-96 my-12'>
                </img>
            </div>
            <div className='mx-5'>
                <h4 className='text-orange-950 font-bold'>{name}</h4>
                <div>
                    <p className='text-orange-950'>{`Color: ${colorChoose}`}</p>
                <ul className='flex flex-row flex-wrap'>
                {
                    color?.map((e: any) => {
                        return(
                            <>
                            <li className='mx-2'>
                            <ColorChoose color={e} colorProducto={colorProducto} product={product}/>
                            </li>
                            </>
                        )
                    })
                }
                </ul>
                </div>
                <p className='text-orange-950 font-bold my-2'>{`$${price}`}</p>
                <GenericInfoCard/>
                <div className='mt-2'>
                <button className='bg-emerald-700 rounded-md p-2 my-2 w-full text-white'>Comprar ahora</button>
                <button className='border border-emerald-700 rounded-md p-2 my-2 w-full text-orange-950'>Más información</button>
                </div>
            </div>

        </div>
    )
}

export default Card

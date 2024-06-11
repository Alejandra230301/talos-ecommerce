"use client";
import React, { useState } from 'react'
import ColorChoose from '../secondary/ColorChoose'
import GenericInfoCard from '../secondary/GenericInfoCard';
import Link from 'next/link';
import handleCart from '@/helpers/handleCart';
import { IProduct, IColor } from '@/interfaces/IProduct';


const Card = ({ producto }: { producto: IProduct}) => {
    const { name, product, price, description, image, stock, color } = producto
    const [colorChoose, setColorChoose] = useState('Elige un color')
    const [imageColor, setImageColor] = useState(image)
    const nameRoute = name.toLowerCase().replace(/ /g, '-')

    const colorProducto = (color: string, imageColor : string) => {
        setColorChoose(color)
        setImageColor(imageColor)
    }

    return (
        <div className='bg-white m-3'>
            <div className='flex w-full'>
                <img src={imageColor} className='object-contain h-60 w-96 my-12'>
                </img>
            </div>
            <div className='mx-5'>
                <h4 className='text-orange-950 font-bold'>{name}</h4>
                {/* <div>
                    <p className='text-orange-950'>{`Color: ${colorChoose}`}</p>
                <ul className='flex flex-row flex-wrap'>
                {
                    color?.map((e: IColor) => {
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
                </div> */}
                <p className='text-orange-950 font-bold my-2'>{`$${price}`}</p>
                <GenericInfoCard/>
                <div className='mt-2'>
                <Link href={`/products/${product}`} className='border border-emerald-700 rounded-md p-2 my-2 text-center block w-full text-orange-950'>Más información</Link>
                <button onClick={() => handleCart(producto)} className='bg-emerald-700 rounded-md p-2 mb-2 w-full text-white'>Comprar ahora</button>

                </div>
            </div>

        </div>
    )
}

export default Card

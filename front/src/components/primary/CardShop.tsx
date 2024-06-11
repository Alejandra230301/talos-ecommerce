
import { IProduct } from '@/interfaces/IProduct'
import React from 'react'


const CardShop = ({ producto }: any) => {
    const { id, name, product, price, image, color } = producto
    return (
        <div className='flex flex-col md:flex-row justify-between my-6'>
            <div className='flex flex-row'>
                <div className="flex items-center mb-4">
                    <input type="checkbox" value="" className="mx-4" />
                </div>
                <div>
                    <img className="object-contain w-16 my-auto mx-auto" src={image} />
                </div>
                <div className='flex flex-row mx-3'>
                    <div className='flex flex-col text-orange-950' >
                        <p className='text-2xl font-bold'>{name}</p>
                        <p>Código:  {id}</p>
                        {/* <p>{color}</p> */}
                    </div>
                </div>
            </div>
            <div className='m-3 md:mr-2 flex flex-row md:flex-col justify-self-end justify-end md:justify-center '>
                <p className=' text-orange-950 font-bold mx-2 mt-1'>Valor </p>
                <p className='text-orange-500 font-bold text-2xl'>{`$${price}`}</p>
            </div>
        </div>
    )
}

export default CardShop

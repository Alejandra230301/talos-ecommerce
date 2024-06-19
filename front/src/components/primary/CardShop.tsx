
import { IProduct } from '@/interfaces/IProduct'
import React from 'react'



const CardShop = ({ producto, totalPrice, deleteProduct }: any) => {
    const { id, name, product, price, image, color } = producto
    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between my-6'>
                <div className='flex flex-row'>
                    <div className="flex items-center">
                        <input type="checkbox" value={price} onChange={totalPrice} className="mx-4" />
                    </div>
                    <div className=''>
                        <img className="object-contain my-auto mx-auto w-24 h-24 self-center" src={color[0].image} />
                    </div>
                    <div className='flex flex-row mx-3'>
                        <div className='flex flex-col text-orange-950' >
                            <p className='text-2xl font-bold'>{name}</p>
                            <p>Código:  {id}</p>
                            <p>Color:  {color[0].title}</p>
                        </div>
                    </div>
                </div>
                <div className='m-3 md:mr-6 flex flex-row justify-between'>
                    <div className=''>
                    <p className=' text-orange-950 font-bold sm:text-end'>Valor </p>
                    <p className='text-orange-500 font-bold text-2xl'>{`$${price}`}</p>
                    </div>
                    <button onClick={() => deleteProduct(producto)} className='bg-orange-500 sm:hidden text-white px-3 py-1 mx-2 sm:mx-6 my-3  rounded-md '>
                    Eliminar
                </button>
                </div>
            </div>
            <div className='flex-row hidden sm:flex sm:justify-end'>
                <button onClick={() => deleteProduct(producto)} className='bg-orange-500 text-white px-3 py-1 mx-2 sm:mx-6 mb-3  rounded-md '>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default CardShop

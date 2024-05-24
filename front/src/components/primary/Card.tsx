import React from 'react'
import ColorChoose from '../secondary/ColorChoose'

const Card = ({ producto }: any) => {
    const { name, price, description, image, stock, color } = producto
    return (
        <div className='bg-white w-96  m-3'>
            <div className='flex h-96'>
                <img src={image} className='self-center'>
                </img>
            </div>
            <div className='mx-5'>
                <h4 className='text-orange-950 font-bold'>{name}</h4>
                <p className='text-orange-950'>{`$${price}`}</p>
                <div>
                <ul className='flex flex-row'>
                {
                    color?.map((e: any) => {
                        return(
                            <>
                            <li className='mx-2'>
                            <ColorChoose color={e}/>
                            </li>
                            </>
                        )
                    })
                }
                </ul>
                </div>
                <button className='bg-emerald-700 rounded-md p-2 my-2 w-full'>Añadir al carro</button>
            </div>

        </div>
    )
}

export default Card

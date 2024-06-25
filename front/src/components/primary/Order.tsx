import { Orders } from '@/types/user'
import Link from 'next/link'
import React from 'react'

const Order = ({ order }: { order: Orders }) => {
  const { id, status, date, products, color } = order
  console.log(color)

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    // Opciones de formateo
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    // Formatear la fecha
    return date.toLocaleDateString('es-ES', options);
  }

  const newDate = formatDate(date.toString())

  return (
    <div className='flex bg-white flex-col w-3/4 mx-auto rounded-md border border-orange-900 my-3'>
      <div className='flex flex-row justify-between bg-orange-950 rounded-sm py-3 px-1 sm:p-3'>
        <div className='flex flex-col text-white'>
          <p className='font-bold'>Orden: </p>
          <p>{id}</p>
        </div>
        <div className='flex flex-col text-white'>
          <p className='font-bold'>Fecha: </p>
          <p>{newDate}</p>
        </div>
      </div>
      <div className='flex justify-center sm:justify-start'>
        {
          products?.map((e) => {
            console.log(e)
            return (
              <>
                <div className='flex flex-col sm:flex-row my-3'>
                  <img src={color.image} className='object-contain w-48 h-48 mx-3' />
                  <div className='flex flex-col justify-around'>
                    <div className='my-2 sm:my-0'>
                      <h3 className='text-teal-900 text-4xl font-bold text-center sm:text-start'>{e.name}</h3>
                      <p className='text-center sm:text-start'><span className='font-bold'>Total: </span>{`$${e.price}`}</p>
                      <p className='text-center sm:text-start'><span className='font-bold'>Color: </span>{`${color.title}`}</p>
                    </div>
                    <div className='mx-auto sm:mx-0'>
                      <Link href={`/products/${e.route}`} className='bg-emerald-700 rounded-md p-2 mb-2 w-full text-white text-center '>Ver el producto</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Order

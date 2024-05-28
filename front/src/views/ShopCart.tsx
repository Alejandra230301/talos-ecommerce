import React from 'react'
import shopProducto from '@/helpers/shopProducto'
import CardShop from '@/components/primary/CardShop'

const ShopCart = () => {
  const tempCard = shopProducto
  const isEmpty = false
  return (
    <div className='mx-12 xl:mx-24 self-center my-4 flex flex-col xl:flex-row'>
      <div className={` ${isEmpty ? "w-full" : "w-full xl:w-8/12"}`}>
        <div className='border-b border-orange-950'>
          <h2 className="text-4xl text-orange-950 font-bold ">{isEmpty ? "Tu carro esta vacío" : "Carro de compra"}</h2>
          <p className="text-orange-950 my-3">{isEmpty ? "Agrega productos de nuestra tienda" : "Selecciona los items que deseas comprar"}</p>
        </div>
        <button className={` bg-orange-500 text-white font-bold py-2 px-3 my-4 rounded-md ${isEmpty ? "block" : "hidden"}`}>Seguir comprando</button>
        {
          !isEmpty &&
          <>
          <div>
          <ul className='flex flex-col'>
            {
              tempCard?.map((e) => {
                return (
                  <>
                    <li className=''>
                      <CardShop producto={e} />
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
          </>
        }
</div>

      {
        !isEmpty &&
        <>
          <div className='xl:w-4/12'>
            <div className='bg-orange-950 text-white mx-0 xl:mx-12 p-6'>
              <div className='flex flex-row justify-between my-2'>
              <p className='font-bold me-4'>Envio </p>
              <p > Gratis</p>
              </div >
              <div className='flex flex-row justify-between my-2 '>
              <p className='font-bold me-4'>Subtotal </p>
              <p>$699</p>
              </div>
              <div className='flex flex-row justify-between border-y border-y-white py-4 my-4'>
              <p className='font-bold text-2xl'>Total </p>
              <p className='font-bold text-2xl'>$699</p>
              </div>
              <p className='text-white my-2'>El costo y días de envío serán calculados, después de ingresar la ciudad destino y tipo de envío</p>
              <button className='bg-orange-500 text-white font-bold py-2 px-3 my-2 rounded-md w-full'>Continuar</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ShopCart

"use client";
import React, { useEffect, useState } from 'react'
import shopProducto from '@/helpers/shopProducto'
import CardShop from '@/components/primary/CardShop'
import { IProduct } from '@/interfaces/IProduct';
import Link from 'next/link';
import { postOrders } from '@/database/user';
import { User } from '@/types/user';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const ShopCart = () => {
  const router = useRouter()
  const [cart, setCart] = useState<IProduct[]>()
  const {userToken, setUserToken} = useAuth()
  const [subTotalPrice, setSubTotalPrice] = useState<number[]>([0])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [idProduct, setIdProduct] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const tempCart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCart(tempCart)
    }
  }, [])

  useEffect(() => {
    const suma = subTotalPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    setTotalPrice(suma)
  }, [subTotalPrice])

  const handleTotalPrice = (e: any) => {
    const value = Number(e.target.value)
    console.log(e.target.value)
    if (subTotalPrice?.includes(value)) {
      console.log("entro")
      let filters = subTotalPrice.filter((el: number) => el !== value);
      setSubTotalPrice(filters);
      //Si ese filtro no se encuentra se agrega al array
    } else {
      setSubTotalPrice([...subTotalPrice, value])
    }
  }

  const handleDeleteProduct = (e: any) => {
    console.log(e)
    const tempCart = cart?.filter((product) => product.id != e.id)
    setCart(tempCart)
    localStorage.setItem("cart", JSON.stringify(tempCart));
    console.log(cart)
  }

  const handleOrder = async () => {
    let idOrders: number[] = [];
    cart?.map((e) => {
      idOrders.push(e.id)
    })
    const order = await postOrders(userToken!, idOrders)
    if(order.status === 'approved'){
      alert('Tu compra se ha realizado con exito')
      setCart([])
      localStorage.setItem("cart", JSON.stringify([]));
      router.push('/dashboard')
    }
  }

  return (
    <div className='mx-12 xl:mx-24 self-center my-4 flex flex-col xl:flex-row'>
      <div className={` ${cart?.length === 0 ? "w-full" : "w-full xl:w-8/12"}`}>
        <div className='border-b border-orange-950'>
          <h2 className="text-4xl text-orange-950 font-bold ">{cart?.length === 0 ? "Tu carro esta vacío" : "Carro de compra"}</h2>
          <p className="text-orange-950 my-3">{cart?.length === 0 ? "Agrega productos de nuestra tienda" : "Selecciona los items que deseas comprar"}</p>
        </div>
        <Link href="/" className={` bg-orange-500 text-white font-bold py-2 px-3 my-4 rounded-md md:w-1/4 lg:w-1/6 text-center ${cart?.length === 0 ? "block" : "hidden"}`}>Seguir comprando</Link>
        {
          cart?.length != 0 &&
          <>
            <div>
              <ul className='flex flex-col'>
                {
                  cart?.map((e) => {
                    return (
                      <>
                        <li className='bg-white my-2'>
                          <CardShop producto={e} totalPrice={handleTotalPrice} deleteProduct={handleDeleteProduct} />
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
        cart?.length != 0 &&
        <>
          <div className='xl:w-4/12'>
            <div className='bg-orange-950 text-white mx-0 xl:mx-12 p-6'>
              <div className='flex flex-row justify-between my-2'>
                <p className='font-bold me-4'>Envio </p>
                <p > Gratis</p>
              </div >
              <div className='flex flex-row justify-between my-2 '>
                <p className='font-bold me-4'>Subtotal </p>
                <p>{`$${totalPrice}`}</p>
              </div>
              <div className='flex flex-row justify-between border-y border-y-white py-4 my-4'>
                <p className='font-bold text-2xl'>Total </p>
                <p className='font-bold text-2xl'>{`$${totalPrice}`}</p>
              </div>
              <p className='text-white my-2'>El costo y días de envío serán calculados, después de ingresar la ciudad destino y tipo de envío</p>
              <button onClick={handleOrder} className='bg-orange-500 text-white font-bold py-2 px-3 my-2 rounded-md w-full'>Continuar</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ShopCart

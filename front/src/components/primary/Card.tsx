"use client";
import React, { useEffect, useState } from 'react'
import ColorChoose from '../secondary/ColorChoose'
import GenericInfoCard from '../secondary/GenericInfoCard';
import Link from 'next/link';
import { IProduct, IColor } from '@/interfaces/IProduct';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';


const Card = ({ producto }: { producto: IProduct }) => {
    const { id, name, product, route, price, description, image, stock, color } = producto
    const router = useRouter()
    const { userToken, setUserToken } = useAuth()
    const [colorChoose, setColorChoose] = useState('Elige un color')
    const [imageColor, setImageColor] = useState(image)
    const [colorCart, setColorCart] = useState<IColor>()
    const [productCart, setProductCart] = useState<IProduct>()

    useEffect(() => {
        console.log(colorChoose)
        let temp
        if (colorChoose != 'Elige un color') {
            temp = producto.color?.filter((e) => {
                console.log(e.title === colorChoose)
                return e.title === colorChoose
            })
        }
        if (temp) {
            console.log(temp)
            setProductCart({
                ...producto,
                color: temp
            })
            //setProductCart(temp)
        }
    }, [colorChoose])

    const colorProducto = (color: string, imageColor: string) => {
        setColorChoose(color)
        setImageColor(imageColor)
    }

    const handleCart = (e: any) => {
        if (!userToken) {
            alert("No estas logueado")
        } else if (colorChoose === 'Elige un color') {
            alert('Elige un color para tu producto')
        }
        else {
            console.log(productCart)
            const cart = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart?.some((product: IProduct) => {
                if (product?.id === id) return true
                return false
            })
            if (productExist) {
                alert("Este producto ya esta en tu carrito")
                router.push("/cart")
            }
            else {

                cart.push(productCart)
                localStorage.setItem("cart", JSON.stringify(cart));
                router.push("/cart")
            }
        }
    }

    return (
        <div className='bg-white m-3'>
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
                <p className='text-orange-950 font-bold my-2'>{`$${price}`}</p>
                <GenericInfoCard />
                <div className='mt-2'>
                    <Link href={`/products/${route}`} className='border border-emerald-700 rounded-md p-2 my-2 text-center block w-full text-orange-950'>Más información</Link>
                    <button onClick={handleCart} className='bg-emerald-700 rounded-md p-2 mb-2 w-full text-white'>Comprar ahora</button>
                </div>
            </div>

        </div>
    )
}

export default Card

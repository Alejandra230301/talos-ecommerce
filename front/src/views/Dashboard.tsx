"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Orders, User } from '@/types/user';
import { getOrders } from '@/database/user';
import Order from '@/components/primary/Order';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {

    const router = useRouter()
    const { userToken, setUserToken, userData, setUserData } = useAuth()
    const [botonDashboard, setBotonDashboard] = useState('')
    const [data, setData] = useState<User>()
    const [orders, setOrders] = useState<Orders[]>()

    useEffect(() => {
        console.log(userData)
        setData(userData)
        const fetchOrders = async () => {
            const orders = await getOrders(userToken!)
            console.log(orders)
            setOrders(orders)
        }
        fetchOrders()
    }, [])

    function setLogout(): void {
        setBotonDashboard('info')
        setUserToken(null)
        localStorage.clear()
        router.push("/")
    }

    return (
        <>
            <div className='flex flex-col mx-auto'>
                <h2 className='text-orange-950 text-4xl font-bold my-3 w-3/4 mx-auto'>Mi cuenta</h2>
                <div className='bg-teal-900 p-3 flex flex-row justify-between xsm:justify-around'>
                    <button onClick={() => { setBotonDashboard('info') }} className={`${botonDashboard === 'info' && 'border-b-2 border-orange-400 text-orange-400'}`}>
                        Información
                    </button>
                    <button onClick={() => { setBotonDashboard('order') }} className={`${botonDashboard === 'order' && 'border-b-2 border-orange-400 text-orange-400'}`}>
                        Ordenes
                    </button>
                    <button onClick={() => {setLogout()}} className='text-white focus:border-b-2 focus:border-orange-400 focus:text-orange-400'>
                        Cerrar sesión
                    </button>
                </div>
                <div>
                    {

                        botonDashboard === 'info' ?
                            <>
                            <div className='w-3/4 flex flex-col mx-auto'>
                                <div className='flex flex-col text-orange-950 my-3'>
                                    <h2 className=' text-xl font-bold my-2'>Mi información </h2>
                                    <p className=''>{data?.name}</p>
                                    <p className=''>{data?.email}</p>
                                </div>
                                <div className='flex flex-col '>
                                <h2 className=' text-xl font-bold text-orange-950 my-2'>Mis direcciones </h2>
                                <div className='flex flex-row justify-between border border-orange-900 rounded-lg p-3'>
                                    <div className='flex flex-col text-orange-950 self-center'>
                                        <h2 className=' text-xl font-bold my-2'>Dirección 1</h2>
                                        <p className=''>Nombre</p>
                                        <p className=''>Dirección</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button className='bg-green-500 text-white font-bold py-2 px-3 my-4 rounded-md'>
                                            Editar
                                        </button>
                                        <button className='bg-orange-950 text-white font-bold py-2 px-3 my-4 rounded-md'>
                                            Borrar
                                        </button>
                                    </div>

                                </div>
                                <button className='bg-orange-500 text-white font-bold py-2 px-3 my-3 self-center rounded-md'>
                                    Añadir nueva dirección
                                </button>
                            </div>
                            </div>
                            </>
                        :
                        <>
                            <div className='flex flex-col text-orange-950'>
                                {
                                    orders?.length != 0 ? (
                                        orders?.map((e) => {
                                            return (
                                                <>
                                                <Order order={e} />
                                                </>
                                            )
                                        })
                                    )
                                        :
                                        <div className='w-3/4 flex flex-col justify-center mx-auto'>
                                            <p className='my-5 text-center'>No hay ordenes</p>
                                            <Link className="rounded-md bg-orange-600 text-white p-2 w-36 text-center mx-auto" href="/">Ir a comprar</Link>
                                        </div>

                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard

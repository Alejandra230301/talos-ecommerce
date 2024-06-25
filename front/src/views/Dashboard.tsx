"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Orders, User } from '@/types/user';
import { getOrders } from '@/database/user';
import Order from '@/components/primary/Order';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Adress from '@/components/primary/Adress';
import { getAdress } from '@/database/adress';
import { AdressProps } from '@/types/adress';
import OrdersDashboard from '@/components/primary/OrdersDashboard';
import { act } from 'react-dom/test-utils';

const Dashboard = () => {

    const router = useRouter()
    const { userToken, setUserToken, userData, isLoading } = useAuth()
    const [botonDashboard, setBotonDashboard] = useState('info')
    const [newAdress, setNewAdress] = useState<string>('')
    const [data, setData] = useState<User | null>()
    const [orders, setOrders] = useState<Orders[]>()
    const [adress, setAdress] = useState<AdressProps[]>()
    const [actualAdress, setActualAdress] = useState<AdressProps >()

    useEffect(() => {
        if (userToken) {
            const fetchOrders = async () => {
                console.log(userToken)
                const orders = await getOrders(userToken!)
                setOrders(orders)
            }
            const fetchAdress = async () => {
                const adress = await getAdress(userToken!)
                setAdress(adress)
            }

            fetchOrders()
            fetchAdress()
        }
    }, [newAdress, userToken])

    const setLogout = () => {
        setBotonDashboard('info')
        setUserToken(null)
        localStorage.clear()
        router.push("/")
    }

    const setEditAdress = (id: number) => {
        const filter = adress?.filter((item: AdressProps) => item.id === Number(id));
        filter?.map((e) => {
            setActualAdress(e)
        })
        setNewAdress('edit')

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
                    <button onClick={() => { setLogout() }} className='text-white focus:border-b-2 focus:border-orange-400 focus:text-orange-400'>
                        Cerrar sesión
                    </button>
                </div>
                <div>
                    {
                        botonDashboard === 'info' && newAdress === '' ?
                            <>
                                <div className='w-3/4 flex flex-col mx-auto'>
                                    <div className='flex flex-col text-orange-950 my-3'>
                                        <h2 className=' text-2xl font-bold my-2'>Mi información </h2>

                                        <p className=''>{userData?.name}</p>
                                        <p className=''>{userData?.email}</p>
                                    </div>
                                    <div className='flex flex-col '>
                                        <h2 className=' text-2xl font-bold text-orange-950 my-2'>Mis direcciones </h2>
                                        <div className='my-3'>
                                            {
                                                adress?.length != 0 ? (
                                                    adress?.map((e) => {
                                                        return (
                                                            <div className='flex flex-row justify-between border border-orange-900 rounded-lg p-3 mb-3'>
                                                                <div className='flex flex-col text-orange-950 self-center'>
                                                                    <h2 className=' text-xl font-bold my-2'>Dirección {e?.id}</h2>
                                                                    <p className=''>{e?.country} , {e?.city}</p>
                                                                    <p className=''>{e?.code}</p>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <button onClick={() => setEditAdress(e.id!)} className='bg-green-500 text-white font-bold py-2 px-3 my-auto rounded-md'>
                                                                        Editar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    }))
                                                    :
                                                    <p className='text-teal-900 mb-3 font-bold'>No hay ninguna dirección</p>
                                            }
                                            <button onClick={() => setNewAdress('new')} className='bg-orange-500 text-white font-bold py-2 px-3 my-3 self-center rounded-md'>
                                                Añadir nueva dirección
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            botonDashboard === 'info' && newAdress != '' ?
                                <>
                                    <Adress changeViewAdress={setNewAdress} typeAdress={newAdress} adress={actualAdress!}/>
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

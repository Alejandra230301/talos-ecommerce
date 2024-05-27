"use client";
import React, { useState } from 'react'

const Dashboard = () => {

    const [botonDashboard, setBotonDashboard] = useState('')

    return (
        <div className='flex flex-col lg:flex-row justify-around mx-auto lg:w-3/5'>
            <div className='flex flex-col mx-12 lg:w-3/12'>
                <h2 className='text-orange-950 text-4xl font-bold'>Mi cuenta</h2>
                <button onClick={() => { setBotonDashboard('info') }} className='bg-teal-900 text-white font-bold py-3 my-4 rounded-md'>Información</button>
                {
                    botonDashboard === 'info' &&
                    <>
                        <div className='flex flex-col text-orange-950  lg:hidden'>
                            <h2 className=' text-3xl font-bold my-2'>Mi información </h2>
                            <p className=''>Nombre</p>
                            <p className=''>Correo</p>
                            <h2 className=' text-3xl font-bold my-2'>Contraseña</h2>
                            <p className=''>Contraseña</p>
                        </div>
                    </>
                }
                <button onClick={() => { setBotonDashboard('order') }} className='bg-teal-900 text-white font-bold py-3 my-4 rounded-md'>Ordenes</button>
                {
                    botonDashboard === 'order' &&
                    <>
                        <div className='flex flex-col text-orange-950  lg:hidden'>
                            <p className='my-2'>No hay ordenes</p>
                        </div>
                    </>
                }
                <button onClick={() => { setBotonDashboard('adress') }} className='bg-teal-900 text-white font-bold py-3 my-4 rounded-md'>Dirección</button>
                {
                    botonDashboard === 'adress' &&
                    <>
                        <div className='flex flex-col  lg:hidden'>
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
                    </>
                }
                <button onClick={() => { setBotonDashboard('logout') }} className='bg-teal-900 text-white font-bold py-3 my-4 rounded-md'>Cerrar sesión</button>
                {
                    botonDashboard === 'logout' &&
                    <>
                    </>
                }
            </div>
            <div className='hidden lg:block w-9/12'>
                {
                    botonDashboard === 'info' ?
                        <>
                            <div className='flex flex-col text-orange-950'>
                                <h2 className=' text-3xl font-bold my-2'>Mi información </h2>
                                <p className=''>Nombre</p>
                                <p className=''>Correo</p>
                                <h2 className=' text-3xl font-bold my-2'>Contraseña</h2>
                                <p className=''>Contraseña</p>
                            </div>
                        </>

                        :
                        botonDashboard === 'order' ?
                            <>
                                <div className='flex flex-col text-orange-950'>
                                    <p className='my-2'>No hay ordenes</p>
                                </div>
                            </>

                            :

                            botonDashboard === 'adress' ?
                                <>
                                    <div className='flex flex-col '>
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
                                        <button className='bg-orange-500 text-white font-bold py-2 px-3 my-3 self-start rounded-md'>
                                            Añadir nueva dirección
                                        </button>
                                    </div>
                                </>

                                :
                                null
                }
            </div>
        </div>
    )
}

export default Dashboard

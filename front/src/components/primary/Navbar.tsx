"use client";
import React, { useState } from "react"
import Link from "next/link";

const Navbar: React.FC = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            {/* General */}
            <header className="bg-orange-50 w-full shadow-md">
                <div id="overlay" className={`fixed inset-0  bg-black bg-opacity-50 ${isActive ? "block" : "hidden"} z-40`}></div>
                <div className="bg-orange-50 md:mx-4 lg:mx-24 2xl:mx-48">
                    <nav >
                        <div className="flex flex-row xsm:justify-around ">
                            <div className="grow xsm:grow-0">
                                <Link href='/'>
                                    <img className="h-auto xl:h-15 w-20 xl:w-40 mx-auto xl:my-2 bg-cover p-2" src="/logo.png" alt="Logo Talos">
                                    </img>
                                </Link>
                            </div>
                            {/* Big Screen */}
                            <div className="self-center hidden xl:block">
                                <ul className="flex flex-row text-orange-950 font-bold ">
                                    <li className="mx-8 my-auto align-middle">
                                        <Link href='products'>
                                            Productos
                                        </Link>
                                    </li>
                                    <li className="mx-8 my-auto">
                                        <Link href='products'>
                                            Ofertas
                                        </Link>
                                    </li>
                                    <li className="mx-8 my-auto">
                                        <Link href='products'>
                                            Nuevo
                                        </Link>
                                    </li>
                                    <li className="mx-8 my-auto">
                                        <Link href='products'>
                                            Tiendas
                                        </Link>
                                    </li>
                                </ul>
                                {/* Mobile Screen */}
                            </div>
                            <div className="self-center mx-3 xl:hidden order-first md:order-last">
                                <button aria-label="Menu lateral" onClick={() => setIsActive(true)} className="text-orange-950">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                                {/* Search Bar - Big Screen */}
                            </div>
                            <div className="self-center hidden w-3/4 xsm:block">
                                <form className="">
                                    <div className="">
                                        <div className="bg-orange-950 bg-opacity-10 rounded-md p-3 flex justify-between">
                                            <input className="bg-orange-950 bg-opacity-0 border-none placeholder-orange-950 text-orange-950 w-full outline-none" placeholder="¿Qué estas buscando?" />
                                            <Link aria-label="Buscar" href='/'>
                                                <svg className="w-4 h-4 text-orange-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Search Bar - Mobile Screen */}
                            <div className="self-center mx-3 xsm:hidden">
                                <Link aria-label="Buscar" href='/'>
                                    <svg className="w-4 h-4 text-orange-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="flext self-center order-first md:order-3">
                                <Link aria-label="Iniciar sesión" className="text-orange-950 flex sm:m-2" href='/login'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <p className="hidden md:block">Ingresar</p>
                                </Link>
                            </div>
                            <div className="flext self-center order-4">
                                <Link aria-label="Ir al carrito" className="text-orange-950 flex m-2" href='/cart'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                        {
                            isActive &&
                            <>
                                <div className="fixed top-0 left-0 z-40 w-64 h-screen pt-4  overflow-y-auto bg-orange-50 shadow-md">
                                    <div className="border-b px-3 pb-3 border-orange-950">
                                        <h5 className="text-orange-950 font-bold">Menú</h5>
                                        <button type="button" aria-label="Cerrar menú " onClick={() => setIsActive(false)} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-orange-950 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center" >
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Close menu</span>
                                        </button>
                                    </div>
                                    <div className="py-4 overflow-y-auto">
                                        <div className="space-y-2">
                                            <ul className="flex flex-col text-orange-950 font-bold ">
                                                <li className="mx-8 my-auto py-2">
                                                    <Link href='products'>
                                                        Productos
                                                    </Link>
                                                </li>
                                                <li className="mx-8 my-auto py-2">
                                                    <Link href='products'>
                                                        Ofertas
                                                    </Link>
                                                </li>
                                                <li className="mx-8 my-auto py-2">
                                                    <Link href='products'>
                                                        Nuevo
                                                    </Link>
                                                </li>
                                                <li className="mx-8 my-auto py-2">
                                                    <Link href='products'>
                                                        Tiendas
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </>
                        }

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
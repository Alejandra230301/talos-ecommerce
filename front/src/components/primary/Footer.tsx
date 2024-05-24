"use client";
import React, { useState } from 'react';
import footerList from '@/helpers/footerList';
import ListFooter from '../secondary/ListFooter';

const Footer = () => {

    const [footer, setFooter] = useState(footerList)

    return (
        <>
            <div className='flex justify-center bg-teal-900'>
                <div className='sm:w-3/4 my-4'>
                    <div className='flex flex-wrap flex-row justify-start ml-5 sm:m-0 sm:justify-around'>
                        {
                            footer?.map((e) => {
                                return (
                                    <>
                                        <ListFooter props={e} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='my-8 flex flex-wrap flex-row justify-center'>
                        <p className='my-6 lg:my-auto text-white font-bold'>Obten descuentos, ofertas y más.</p>
                        <div className='flex flex-row'>
                            <input className='mx-4' placeholder='Dirección de email' />
                            <button className='rounded-md bg-orange-600 p-2 '>
                                Suscribete
                            </button>
                            
                        </div>
                    </div>
                    <div>
                        <hr className="my-6 border-orange-50 sm:mx-auto lg:my-8" />
                            <span className="block text-sm text-orange-50 sm:text-center">© 2024 All Rights Reserved.</span>
                        </div>
                </div>
            </div>
        </>

    )
}

export default Footer

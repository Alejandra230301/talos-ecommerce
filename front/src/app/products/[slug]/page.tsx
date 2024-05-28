"use client";
import CardDetail from '@/components/primary/CardDetail'
import tempProducto from '@/helpers/tempProducto'
import React, { useEffect, useState } from 'react'

const page = ({ params }: any) => {
    const ruta = params.slug
    const [producto, setProducto] = useState({})

    useEffect(() => {
        tempProducto?.map((e) => {
            if(e.product === ruta){
                setProducto(e)
                console.log(producto)
            }
        })
        console.log(producto)
      });

    return (
        <>
            <div>
                {
                    // <CardDetail product={producto}/>
                }
                
            </div>
        </>
    )
}

export default page

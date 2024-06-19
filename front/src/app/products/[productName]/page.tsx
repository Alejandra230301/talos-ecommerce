
import CardDetail from '@/components/primary/CardDetail'
import { getOneProduct } from '@/database/products';
import tempProducto from '@/helpers/tempProducto'
// import IProduct from '@/interfaces/IProduct';
import React, { useEffect, useState } from 'react'

const page = async ({params} : {params : {productName: string}}) => {
    const ruta = params.productName
    console.log(ruta)
    const product = await getOneProduct(ruta)
    return (
        <>
        {
        product &&
        <CardDetail producto={product} /> 
        }
        
        </>
    )
}

export default page


import CardDetail from '@/components/primary/CardDetail'
import { getOneProduct } from '@/database/products';
import tempProducto from '@/helpers/tempProducto'
import IProduct from '@/interfaces/IProduct';
import React, { useEffect, useState } from 'react'

const page = async ({ params }: any) => {
    const ruta = params.slug
    const product = await getOneProduct(ruta)
    console.log(product?.id)
    return (
        <>
        <CardDetail producto={product} />
        </>
    )
}

export default page

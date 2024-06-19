'use client'
import Card from '@/components/primary/Card'
import { getProducts } from '@/database/products'
import { IProduct } from '@/interfaces/IProduct'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page =  () => {

    const [search, setSearch] = useState<string | null>()
    const [productSearch, setProductSearch] = useState<IProduct[]>()

    useEffect(() => {
        console.log("entro")
        if (typeof window !== "undefined" && window.localStorage) {
            const temp: string | null = localStorage.getItem("search")
            setSearch(temp)
        }
        bringData()
    }, [])

    const bringData = async () => {
        const products = await getProducts()
        setProductSearch(products)
        const temp = products?.filter((e) => {
            const nameLower = e.name.toLowerCase()
            const tempSearch = localStorage.getItem("search")?.toLowerCase()
            console.log(tempSearch)
            if(nameLower.includes(tempSearch) && tempSearch != ''){
                console.log("entro")
                return e
            } 
        })
        console.log(temp)
        setProductSearch(temp)
    }

    return (
        <div className='lg:w-5/6 mx-auto my-5'>
            <div className='w-5/6 mx-auto border-b pb-3 border-orange-950'>
            <p className='text-orange-950  font-bold text-xl'>Resultado de busqueda: {search}</p>
            <p className='text-orange-950'>{productSearch?.length} resultados</p>
            </div>
        <div className='my-3 flex flex-row flex-wrap justify-center'>
          {
            productSearch?.length === 0 ?
              <>
              <div className='my-5 flex flex-col justify-center'>
                <h2 className='text-orange-600 text-2xl mb-5 font-bold '>No se encontraron resultados</h2>
                <Link href='/products' className='bg-teal-900 text-white px-3 py-2 rounded-md mx-auto'>Ver todos los productos</Link>
              </div>
              </>
              :
              <>
                {
                  productSearch?.map((e: IProduct) => {
                    return (
                      <>
                        <div >
                          <Card key={e?.id} producto={e} />
                        </div>
                      </>
                    )
  
                  })
                }
              </>
          }
  
        </div>
      </div>
    )
}

export default page

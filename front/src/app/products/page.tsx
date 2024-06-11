
import Cards from '@/views/Cards'
import React, { useEffect, useState } from 'react'
import categoryFilter from '@/helpers/categoryFilter'
import tempProducto from '@/helpers/tempProducto'
import Filter from '@/components/primary/Filter'
import Card from '@/components/primary/Card'
import { getProducts } from '@/database/products'

const page = async () => {
  const products = await getProducts()
  return (
    <>
      {
        products &&
        <Cards data={products} />
      }
    </>
  )
}

export default page



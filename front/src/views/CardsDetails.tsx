import React from 'react'
import tempProducto from '@/helpers/tempProducto'
import CardDetail from '@/components/primary/CardDetail';

const CardsDetails = () => {
    const products = tempProducto;
  return (
    <>
    <div className='w-3/4 mx-auto'>
    {
                products?.map((e) => {
                    return (
                        <>
                            <div key={e.id}>
                                <CardDetail producto={e}/>
                            </div>
                        </>
                    )

                })
            }
    </div>
    </>
  )
}

export default CardsDetails

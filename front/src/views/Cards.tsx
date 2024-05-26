import Card from '@/components/primary/Card'
import tempProducto from '@/helpers/tempProducto'
import React from 'react'

const Cards = () => {
    const products = tempProducto;

    return (
        <>
        <div className='my-8 flex flex-row flex-wrap justify-center'>
            {
                products?.map((e) => {
                    return (
                        <>
                            <div key={e.id}>
                                <Card producto={e} />
                            </div>
                        </>
                    )

                })
            }
        </div>
        </>
    )
}

export default Cards

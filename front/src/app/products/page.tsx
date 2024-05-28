'use client'
import Cards from '@/views/Cards'
import React, { useEffect, useState } from 'react'
import categoryFilter from '@/helpers/categoryFilter'
import tempProducto from '@/helpers/tempProducto'
import Filter from '@/components/primary/Filter'
import Card from '@/components/primary/Card'

const page = () => {
  const categoria = categoryFilter
  const products = tempProducto;
  const [value, setValue] = useState('')
  const [buttonFilter, setButtonFilter] = useState(false)

  const [selectedFilters, setSelectedFilters]: any[] = useState([])
  const [newProducts, setNewProducts] = useState(products)

  const handleCheck = (event: any) => {
    //Defino el valor que toma el checkbox
    const value = event.target.value
    //Si ese filtro ya se encuentra seleccionado se eliminar del array
    if (selectedFilters?.includes(value)) {
      let filters = selectedFilters.filter((el: any) => el !== value);
      setSelectedFilters(filters);
      //Si ese filtro no se encuentra se agrega al array
    } else {
      setSelectedFilters([...selectedFilters, value]);
      console.log(selectedFilters)
    }
  }

  useEffect(() => {
    filterCategories()
  }, [selectedFilters]);


  const filterCategories = () => {
    //Si hay un filtro seleccionado entra
    if (selectedFilters?.length > 0) {
      //Mapeo mis filtros para obtener el string
      let tempItems = selectedFilters.map((e: any) => {
        //Filtro mi objeto con todos los productos si la categoria corresponde y la almaceno en una variable
        let temp = products.filter((item) => item.category === e);
        return temp;
      });
      //Actualizo el array con los nuevos objetos concatenados
      setNewProducts(tempItems.flat());
    } else {
      //En caso de que no haya filtros vuelvo al array original
      setNewProducts([...products]);
    }
  }


  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col mt-12 mx-auto lg:ml-12 w-2/4 lg:w-1/6'>
        <button onClick={() => setButtonFilter(true)}className='bg-orange-500 px-5 py-2 self-center rounded-md w-full'>
          <h2 className='text-2xl text-white font-bold '>Filtros</h2>
        </button>
        {
          buttonFilter &&
        <div >
          <h2 className='text-orange-950 font-bold my-3 text-center lg:text-start'>Categorias</h2>
          <ul className='flex flex-col flex-wrap mb-6 mx-auto '>
            {
              categoria?.map((e) => {
                return (
                  <>
                    <li key={e.id} className='mx-5 my-1'>
                      <Filter category={e} handle={handleCheck} />
                    </li>

                  </>
                )
              })
            }
          </ul>
        </div>
        }
      </div>
      <div className='lg:w-5/6 mx-auto'>
        <div className='my-8 flex flex-row flex-wrap justify-center'>
          {
            newProducts?.length === 0 ?
              <>
                <h2>No se encontraron productos</h2>
              </>
              :
              <>
                {
                  newProducts?.map((e: any) => {
                    return (
                      <>
                        <div key={e?.id}>
                          <Card producto={e} />
                        </div>
                      </>
                    )

                  })
                }
              </>
          }

        </div>
      </div>
    </div>
  )
}

export default page



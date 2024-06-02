'use client'
import React, { useEffect, useState } from 'react'
import categoryFilter from '@/helpers/categoryFilter'
import tempProducto from '@/helpers/tempProducto'
import Filter from '@/components/primary/Filter'
import Card from '@/components/primary/Card'
import IProduct from '@/interfaces/IProduct'

const Cards = ({data} : any) => {
  const categoria = categoryFilter
  //const products = tempProducto;
  const [value, setValue] = useState('')
  const [buttonFilter, setButtonFilter] = useState(false)

  const [selectedFilters, setSelectedFilters]: any[] = useState([])
  const [newProducts, setNewProducts] = useState(data)

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
        let temp = data.filter((item : any) => item.categoryId === Number(e) );
        console.log(temp)
        return temp;
      });
      //Actualizo el array con los nuevos objetos concatenados
      setNewProducts(tempItems.flat());
    } else {
      //En caso de que no haya filtros vuelvo al array original
      setNewProducts([...data]);
    }
  }

  const filterDisplay = () => {
    setButtonFilter(!buttonFilter)
  }


  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col mt-12 mx-auto lg:ml-12 w-2/4 lg:w-1/6'>
        <button onClick={() => filterDisplay()} className='bg-orange-500 px-5 py-2 self-center rounded-md w-full flex flex-row justify-around'>
          <h2 className='text-2xl text-white font-bold '>Filtros</h2>
          {
            buttonFilter === false ?
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white self-center font-bold">
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                </svg>
              </>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white self-center font-bold">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>

          }

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

export default Cards

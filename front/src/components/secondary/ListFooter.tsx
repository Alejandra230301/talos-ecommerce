import React from 'react'

interface ListFooterProps {
  id: number,
  title: string,
  elements: string[]
}

const ListFooter = ({ lista }: {lista: ListFooterProps}) => {
  const {id, title, elements} = lista
  return (
    <>
    <div>
      <h2 className='mx-8 my-4 text-2xl font-bold text-white'>{title}</h2>
      <ul className="flex flex-col text-orange-50 ">
        {
          elements.map((e: string) => {
            return (
              <>
                <li key={id} className="mx-8 my-auto py-2">
                  {e}
                </li>
              </>
            )
          })
        }
      </ul>
      </div>
    </>
  )
}

export default ListFooter

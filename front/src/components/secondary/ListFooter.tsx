import { title } from 'process'
import React from 'react'


const ListFooter = ({ props }: any) => {
  return (
    <>
    <div>
      <h2 className='mx-8 my-4 text-2xl font-bold text-white'>{props.title}</h2>
      <ul className="flex flex-col text-orange-50 ">
        {
          props.elements.map((e: string) => {
            return (
              <>
                <li className="mx-8 my-auto py-2">
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

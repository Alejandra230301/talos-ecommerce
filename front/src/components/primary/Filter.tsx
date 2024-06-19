'use client';
import React from 'react'
import "../../styles/input.css"

interface FilterProps {
  category : {
    id: number,
    name: string
  }
  handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter : React.FC<FilterProps>= ({category, handle}) => {
    const {id, name} = category
  return (
    <div className='flex flex-row'>
    <input type="checkbox" value={id} onChange={handle} />
    <label className="ms-2 mt-1 text-sm font-medium text-orange-950">{name}</label>
    </div>
  )
}

export default Filter

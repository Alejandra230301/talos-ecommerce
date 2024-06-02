'use client';
import React from 'react'
import "../../styles/input.css"

const Filter = ({category, handle} : any) => {
    const {id, name} = category
  return (
    <div className='flex flex-row'>
    <input type="checkbox" value={id}  onChange={handle} />
    <label className="ms-5 mt-1 text-sm font-medium text-orange-950">{name}</label>
    </div>
  )
}

export default Filter

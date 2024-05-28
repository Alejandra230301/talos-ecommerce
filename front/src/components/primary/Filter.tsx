'use client';
import React from 'react'
import "../../styles/input.css"

const Filter = ({category, handle} : any) => {
    const {name} = category
  return (
    <div className='flex flex-row'>
    <input type="checkbox" value={name}  onChange={handle} className="filter w-4 h-4 bg-green-500 text-green-600 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label className="ms-5 text-sm font-medium text-orange-950">{name}</label>
    </div>
  )
}

export default Filter

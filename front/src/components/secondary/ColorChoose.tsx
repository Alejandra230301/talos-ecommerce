import React from 'react'

const ColorChoose = ({color} : any) => {
    console.log(color)
  return (
    <button className="rounded-full mt-2">
        <img src={`/color/${color}.png`}/>
    </button>
  )
}

export default ColorChoose

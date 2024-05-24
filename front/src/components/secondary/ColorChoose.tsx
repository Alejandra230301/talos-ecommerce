import React from 'react'

const ColorChoose = ({color, colorProducto, product} : any) => {
  const {name, title, stock, image} = color
  return (
    <button onClick={() => colorProducto(title, image)} className="rounded-full border border-slate-300 w-8 mx-1 my-2">
        <img src={`/${product}/${name}.png`}/>
    </button>
  )
}

export default ColorChoose

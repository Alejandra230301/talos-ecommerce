import { IColor } from '@/interfaces/IProduct'
import React from 'react'

interface ColorChooseProps {
  color: IColor
  colorProducto: (title : string, image : string, name: string) => void;
  product: string
}

const ColorChoose: React.FC<ColorChooseProps> = ({color, colorProducto, product}) => {
  const {name, title, stock, image} = color
  return (
    <button onClick={() => colorProducto(title, image, name)} className="rounded-full border border-slate-300 focus:border-slate-700 w-8 mx-1 my-2">
        <img src={`/${product}/${name}.png`}/>
    </button>
  )
}

export default ColorChoose

import { IEntity } from '@/interfaces/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomImage from './image'

const Product: React.FC<IEntity.ProductProps> = React.memo(
  ({ id, title, price, category, description, image, rating }) => {
    return (
      <Link
        href={`/product/${id}`}
        className="cursor-pointer p-6 rounded-lg h-96 flex flex-col group hover:scale-105 transition-transform ease-out duration-200 border mt-10"
      >
        <div className="relative max-h-80 flex-1 object-cover">
          <CustomImage product={{ id, title, price, category, description, image, rating }} fill />
        </div>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {category}
        </h3>
        <div className="font-semibold flex items-center justify-between mt-4 mb-1">
          <p className="w-44 truncate">{title}</p>
          <p>{price}</p>
        </div>
        <p className="leading-relaxed text-base line-clamp-2">
          {description}
        </p>
        <p className="leading-relaxed text-base">
          Rating: {rating.rate} ({rating.count} count)
        </p>
      </Link>
    )
  },
)

export default Product

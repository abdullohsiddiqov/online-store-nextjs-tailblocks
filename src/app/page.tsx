'use client'
import React, { useEffect, useState } from 'react'
import Product from '@/components/Product'
import { IEntity } from '../interfaces/types'
import { getAllProducts } from '../interfaces/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Hero from '@/components/hero'

export default function Home() {
  const [products, setProducts] = useState<IEntity.Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getAllProducts()
        setProducts(data)
      } catch (err) {
        setError('Error fetching products.')
        toast.error('Error fetching products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (error) return <p>{error}</p>

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <ToastContainer />
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">PRODUCTS</h1>
      </section>
      <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  )
}

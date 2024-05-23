import { IEntity } from '@/interfaces/types';
import axios from 'axios';

export const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}
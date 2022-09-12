// Type Based Main Type

type Product = {
  id: string
  name: string
  description: string
  value: number
  createdAt: Date
  updatePriceValueDate: Date
}

type ResponseProduct = Omit<Product, 'createdAt' | 'updatePriceValueDate'>

type CreateProduct = Omit<Product, 'id'>

type FindOneProduct = Pick<Product, 'id' | 'name'>

import React from 'react'
import ProductListItem from './ProductListItem.js'

export default { title: 'ProductListItem' }

export const withPrice = () => (
  <ProductListItem
    item={{
      name: 'Hourglass crystal-embellished wool jacket',
      code: '1317512',
      price: 10
    }}
  />
)

export const withPreviousPrice = () => (
  <ProductListItem
    item={{
      name: 'Hourglass crystal-embellished wool jacket',
      code: '1317512',
      price: 10,
      previousPrice: 20
    }}
  />
)

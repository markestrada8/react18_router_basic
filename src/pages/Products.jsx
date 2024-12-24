import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (

    <>
      <h1>Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
      <p>
        Go to <Link to={'/'}>Home</Link>
      </p>
    </>
  )
}

import React from 'react'
import data from '../../data/data.json'

export default function ProductRow({product}) {
    const name = product.stocked ? product.name :
    <span  style={{ color: 'red' }}>
      No hay {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

import React from 'react'
import data from '../../data/data.json'

export default function ProductCategoryRow({category}) {

  return (
    <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
  )
}

import React from "react";
import ProductRow from "../ProductRow/ProductRow";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import data from '../../data/data.json'


export default function ProductTable({filterText, inStock}) {
    const { products } = data;
    const rows = [];
    let lastCategory = null;
  
    products.forEach((sorongo) => {
      if (sorongo.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={sorongo.category}
            key={sorongo.category} />
        );
      }
      rows.push(
        <ProductRow
          product={sorongo}
          key={sorongo.name} />
      );
      lastCategory = sorongo.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
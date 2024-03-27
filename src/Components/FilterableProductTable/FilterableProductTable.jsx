import React, { useState } from "react";
import SearchBar from "../SearcBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";
 

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <SearchBar 
      filterText={filterText}
      inStock={inStock}
      onFilterTextChange = {setFilterText}
      onInStockChange = {setInStock}
      />
      <ProductTable products={products}
      filterText={filterText}
      inStock={inStock}
      />
    </div>
  );
}

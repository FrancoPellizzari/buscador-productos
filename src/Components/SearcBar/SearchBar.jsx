import React from "react";
import {filterText} from '../FilterableProductTable/FilterableProductTable';
import {inStock} from '../FilterableProductTable/FilterableProductTable';


export default function SearchBar({filterText, 
    inStock,
    onFilterChange,
    onInStockChange
 }) {
    return (
      <form>
        <input type="text" 
         value={filterText}
        placeholder="Buscar..." />
        onChange = {(e) => onFilterChange(e.target.value)}
        <label>
          <input type="checkbox"
          checked={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
          />
          {' '}
          Mostrar solo productos en stock
        </label>
      </form>
    );
  }
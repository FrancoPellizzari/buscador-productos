import React from "react";

export default function SearchBar({
  filterText,
  inStock,
  onFilterTextChange,
  onInStockChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Buscar..."
        onChange={(e) => onFilterTextChange(e.target.value)} 
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

import React from 'react';
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';
import data from './data/data.json';

export default function App() {
  return <FilterableProductTable products={data} />;
}

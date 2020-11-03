import React from 'react';

import Header from '../Header';
import './App.css';
import Products from "../../shared/Table/Table.mockdata";
import Container from '../../shared/Container';

import Table, {TableHeader} from '../../shared/Table';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true }
]



function IconComponent(){
    return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="Lupa de busca" />
}
function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
          <Table headers={headers} data={Products} />
      </Container>
    </div>
  );
}

export default App;

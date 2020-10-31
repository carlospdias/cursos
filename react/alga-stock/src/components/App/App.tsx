import React from 'react';

import Header from '../Header';
import './App.css';


import Button from "../../shared/Button";
import Container from '../../shared/Container';
import Input from "../../shared/Input";
import Table from '../../shared/Table';

function IconComponent(){
    return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="Lupa de busca" />
}
function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
          <Button content="Click me." onClick={()=>window.alert('Uhu!!!')} appendIcon={<IconComponent />}>
              Alerta
          </Button>
          <Input label="Página Principal." />
          <Table />
      </Container>
    </div>
  );
}

export default App;

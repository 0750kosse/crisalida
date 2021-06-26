import React from 'react';
import { Header } from './components/Header'
import { Statement } from './components/InfoSections';

const App = () => {
  return (
    <div>
      <Header />
      <Statement
        header='Bienvenido a Crisalida Homes. Un enfoque diferente para vender tu vivienda.'
        subheader='Because it IS personal.' />
    </div>
  );
}

export default App;

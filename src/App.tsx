import React from 'react';
import { Header } from './components/Header'
import { InfoSection } from './components/InfoSections';

const App = () => {
  return (
    <div>
      <Header />
      <InfoSection
        header='Crisalida Homes. Un enfoque diferente para comprar o vender tu casa.'
        subheader='Because we make it personal.'
      />
    </div>
  );
}

export default App;

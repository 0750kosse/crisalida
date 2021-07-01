import React from 'react';
import styled from 'styled-components'
import { mediaQueries } from './mediaqueries'
import { Header } from './components/Header'
import { InfoSection } from './components/InfoSections';
import { Services } from './components/Services'
import { services } from './lib/data/data'

const ColumnToRowWrapper = styled.div`
display: flex;
flex-direction: column;
${mediaQueries("tablet")`
  flex-direction : row;
  justify-content:space-evenly;
  `}
`

const App = () => {
  return (
    <div>
      <Header />
      <InfoSection
        header='Crisalida Homes. Un enfoque diferente para comprar o vender tu casa.'
        subheader='Because we make it personal.'
      />
      <ColumnToRowWrapper>
        {services.map((service, index) => {
          console.log(index)
          return <Services
            key={index}
            image={service.image}
            ctaText={service.ctaText}
            cta={service.cta} />
        })}
      </ColumnToRowWrapper>
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components'
import { mediaQueries } from './mediaqueries'
import { Header } from './components/Header'
import { InfoSection } from './components/InfoSections';
import { Services } from './components/Services'
import { services, introCompany, aboutIntro } from './lib/data/data'

const ColumnToRowWrapper = styled.div`
display: flex;
flex-direction: column;
${mediaQueries("tablet")`
  flex-direction : row;
  justify-content:space-evenly;
  `}
${mediaQueries("tablet")`
  justify-content:center;
  `}
`

const App = () => {
  return (
    <div>
      <Header scrollY />
      <InfoSection
        primary
        header={introCompany.header}
        subheader={introCompany.subheader}
      />
      <ColumnToRowWrapper>
        {services.map((service, index) => {
          console.log(index)
          return <Services
            key={index}
            image={service.image}
            altText={service.altText}
            ctaText={service.ctaText}
            cta={service.cta} />
        })}
      </ColumnToRowWrapper>
      <InfoSection
        header={aboutIntro.header}
        subheader={aboutIntro.subheader}
      />
    </div>
  );
}

export default App;

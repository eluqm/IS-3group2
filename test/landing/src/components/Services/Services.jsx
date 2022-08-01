import React from "react";

import {
  ServicesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./serviStyles";

import Icon1 from "../../assets/img/svg-1.svg";
import Icon2 from "../../assets/img/svg-2.svg";
import Icon3 from "../../assets/img/svg-3.svg";
import Icon4 from "../../assets/img/svg-4.svg";
import Icon5 from "../../assets/img/svg-5.svg";
import Icon6 from "../../assets/img/svg-6.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Un medio para la ciencia</H1>
      <Wrapper>
       
        <Card>
          <Icon src={Icon1} />
          <H2>Conecta</H2>
          <P> BeResearcher conecta a inestigadores de distintas áreas </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Comparte</H2>
          <P> Una comunidad comprometida a impulsar el trabajo científico </P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Multidisciplinar</H2>
          <P>Proyectos y trabajos desde una pespectiva multidisciplinar</P>
        </Card>

        <Card>
          <Icon src={Icon4} />
          <H2>Pregrado</H2>
          <P>Unete a una investigación y crece como investigador</P>
        </Card>

        <Card>
          <Icon src={Icon5} />
          <H2>Posgrado</H2>
          <P>El desarrollo de nuevas ideas surge en las conversación de otros profesionales </P>
        </Card>

        <Card>
          <Icon src={Icon6} />
          <H2>Actualizado</H2>
          <P>Buscamos ser una fuente de recomendación para investigadores y futuros researchers</P>
        </Card>
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;

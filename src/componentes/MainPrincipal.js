
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../zaprecall/assets/img/logo.png'
import cards from './perguntasErespostas';

import AddCards from './AddCards'

import Rodape from './Rodape';

export default function MainPrincipal() {

const [respondidas, setRespondidas] = useState(0); 
const [iconeResposta, setIconeResposta] = useState([]);

  return (
    <Container>
      <LogoContainer>
        <img alt='' src={Logo} />
        <h1>ZapRecall</h1>
      </LogoContainer>

      <AddCards cards={cards} setRespondidas={setRespondidas} respondidas={respondidas} setIconeResposta={setIconeResposta} iconeResposta={iconeResposta} />
      <Rodape cards={cards} respondidas={respondidas} iconeResposta={iconeResposta} />
    </Container>
  );
}
const Container = styled.div`
background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
const LogoContainer = styled.div`
display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  }
`;
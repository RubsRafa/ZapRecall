
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../zaprecall/assets/img/logo.png'
import cards from './perguntasErespostas';

import Cards from './Cards'

import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'

export default function MainPrincipal() {

const [respondidas, setRespondidas] = useState(0); 

  return (
    <Container>
      <LogoContainer>
        <img alt='' src={Logo} />
        <h1>ZapRecall</h1>
      </LogoContainer>

      <Cards cards={cards} setRespondidas={setRespondidas} respondidas={respondidas} />

      <Footer data-test="footer">
        {respondidas}/{cards.length} CONCLUÍDOS
        <Respostas>
        <img src={Certo} />
        <img src={Quase} />
        <img src={Errado} />
        </Respostas>

      </Footer>
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
const Footer = styled.div`
width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`; 
const Respostas = styled.div`
display: flex;
width: 100%;
background-color: hotpink;
justify-content: center;
`;
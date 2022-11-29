
import React from 'react';
import styled from 'styled-components';
import Logo from './zaprecall/assets/img/logo.png'
import SetaPlay from './zaprecall/assets/img/seta_play.png'
import SetaVirar from './zaprecall/assets/img/seta_virar.png'
import Certo from './zaprecall/assets/img/icone_certo.png'
import Quase from './zaprecall/assets/img/icone_quase.png'
import Errado from './zaprecall/assets/img/icone_erro.png'

export default function App() {

  

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} />
        <h1>ZapRecall</h1>
      </LogoContainer>

      <CaixaPerguntaFechada>
        <PerguntasTexto>Pergunta 1</PerguntasTexto>
        <img src={SetaPlay} />
      </CaixaPerguntaFechada>

      <CaixaPerguntaFechada>
        <PerguntasTexto>Pergunta 1</PerguntasTexto>
        <img src={Errado} />
      </CaixaPerguntaFechada>

      <CaixaPerguntaAberta>
        <h1>O que é JSX?</h1>
      <PerguntasImagem src={SetaVirar} />
      </CaixaPerguntaAberta>


      <CaixaPerguntaAberta>
        <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
        <Botoes>
          <BotaoVermelho>Não lembrei</BotaoVermelho>
          <BotaoAmarelo>Quase não lembrei</BotaoAmarelo>
          <BotaoVerde>Zap!</BotaoVerde>
        </Botoes>
      </CaixaPerguntaAberta>
      
      <Footer>
        1/4 CONCLUÍDOS
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
const Botoes = styled.div`
display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`; 
const CaixaPerguntaFechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PerguntasTexto = styled.p`
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

const PerguntasImagem = styled.img `
position: absolute;
  bottom: 10px;
  right: 10px;
`;

const CaixaPerguntaAberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`; 
const BotaoVerde = styled.button`
background-color: #2FBE34;
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid;
  padding:5px;
  margin-left: 5px;
`;
const BotaoAmarelo = styled.button`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid;
  padding:5px;
  margin-left: 5px;
background-color: #FF922E;
`;
const BotaoVermelho = styled.button`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid;
  padding:5px;
  margin-left: 5px;
background-color: #FF3030;
`;
const BotaoCinza = styled.button`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid;
  padding:5px;
  margin-left: 5px;
background-color: #333333;
`;
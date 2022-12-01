import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import SetaPlay from '../zaprecall/assets/img/seta_play.png'
import SetaVirar from '../zaprecall/assets/img/seta_virar.png'
import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'

export default function Cards() {

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    const [cardClicado, setCardClicado] = useState(false)

    return (
        <>
        
            {cards.map((c, i) => <>
                <CaixaPerguntaFechada onClick={() => console.log (c.question, i + 1)}>
                    <PerguntasTexto>Pergunta {i + 1}</PerguntasTexto>
                    <img alt='' src={SetaPlay} />
                </CaixaPerguntaFechada>

                <CaixaPerguntaAberta>
                    <h1>{c.question}</h1>
                    <PerguntasImagem onClick={() => console.log (c.answer)} src={SetaVirar} />
                </CaixaPerguntaAberta>

                <CaixaPerguntaAberta>
                    <h1>{c.answer}</h1>
                    <Botoes>
                        <BotaoVermelho onClick={() => console.log ('pergunta ' + (i + 1) + ' vermelho')}>Não lembrei</BotaoVermelho>
                        <BotaoAmarelo onClick={() => console.log ('pergunta ' + (i + 1) + ' amarelo')}>Quase não lembrei</BotaoAmarelo>
                        <BotaoVerde onClick={() => console.log ('pergunta ' + (i + 1) + ' verde')}>Zap!</BotaoVerde>
                        <BotaoCinza>OI</BotaoCinza>
                    </Botoes>
                </CaixaPerguntaAberta>
            </>
            )}


            <CaixaPerguntaFechada>
                <PerguntasTexto>Pergunta 1</PerguntasTexto>
                <img alt='' src={Certo} />
            </CaixaPerguntaFechada>

            <CaixaPerguntaFechada>
                <PerguntasTexto>Pergunta 1</PerguntasTexto>
                <img alt='' src={Quase} />
            </CaixaPerguntaFechada>

            <CaixaPerguntaFechada>
                <PerguntasTexto>Pergunta 1</PerguntasTexto>
                <img alt='' src={Errado} />
            </CaixaPerguntaFechada>

            <CaixaPerguntaAberta>
                <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
                <Botoes>
                    <BotaoVermelho>Não lembrei</BotaoVermelho>
                    <BotaoAmarelo>Quase não lembrei</BotaoAmarelo>
                    <BotaoVerde>Zap!</BotaoVerde>
                    <BotaoCinza>OI</BotaoCinza>
                </Botoes>
            </CaixaPerguntaAberta>
        </>
    )
}

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
const PerguntasImagem = styled.img`
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
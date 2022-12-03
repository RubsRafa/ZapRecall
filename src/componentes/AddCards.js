import React from 'react';
import { useState } from 'react';

import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'
import FlashCards from './FlashCards';


export default function Cards({ cards, setRespondidas, respondidas, iconeResposta, setIconeResposta }) {

  const [pergunta, setPergunta] = useState(false)                             //se a pergunta vai aparecer
  const [resposta, setResposta] = useState(false)                             //se a resposta vai aparecer
  const [numeroCards, setNumeroCards] = useState();                           //numero da pergunta selecionada
  const [arrayCards, setArrayCards] = useState([])                            //todas as perguntas já selecionadas
  const [resultado, setResultado] = useState(false)                          //se o resultao vai aparecer
  const [botaoResultado, setBotaoResultado] = useState('')                   //define botao resultado da resposta
  const [cardsRespondidas, setCardsRespondidas] = useState([])


  const [errados, setErrados] = useState([]);
  const [quases, setQuases] = useState([]);
  const [certos, setCertos] = useState([]);

  function addNumerosCards(i) {
    if (!arrayCards.includes(i)) {
      setArrayCards([...arrayCards, i])
    }
    setNumeroCards(i);
    setPergunta(true)
  }

  function mostrarResposta() {
    setPergunta(false)
    setResposta(true)
  }

  function esconderTudo(botaoResultado, i) {
    setResultado(true)
    setPergunta(false)
    setResposta(false)
    setBotaoResultado(botaoResultado)
    setCardsRespondidas([...cardsRespondidas, i])

    if (botaoResultado == Errado) {
      setErrados([...errados, i])
      setIconeResposta([...iconeResposta, Errado])
    }
    if (botaoResultado == Quase) {
      setQuases([...quases, i])
      setIconeResposta([...iconeResposta, Quase])
    }
    if (botaoResultado == Certo) {
      setCertos([...certos, i])
      setIconeResposta([...iconeResposta, Certo])
    }

    setRespondidas(respondidas + 1)

  }


  return (
    <FlashCards 
    cards={cards}
    numeroCards={numeroCards}
    arrayCards={arrayCards}
    addNumerosCards={addNumerosCards}
    pergunta={pergunta}
    mostrarResposta={mostrarResposta}
    resposta={resposta}
    esconderTudo={esconderTudo}
    resultado={resultado}
    cardsRespondidas={cardsRespondidas}
    certos={certos}
    quases={quases}
    errados={errados}
    />
  )
}
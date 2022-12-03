import styled from "styled-components";
import SetaPlay from '../zaprecall/assets/img/seta_play.png'
import SetaVirar from '../zaprecall/assets/img/seta_virar.png'
import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'

export default function FlashCards( {
    cards,
    numeroCards,
    arrayCards,
    addNumerosCards,
    pergunta,
    mostrarResposta, 
    resposta, 
    esconderTudo, 
    resultado,
    cardsRespondidas,
    certos,
    quases,
    errados
}) {

    return (
        <>

            {cards.map((c, i) => <>
                {numeroCards !== (i + 1) && !arrayCards.includes(i + 1) && (
                    <CaixaPerguntaFechada key={i}
                        data-test="flashcard">

                        <PerguntasTexto data-test="flashcard-text">Pergunta {i + 1}</PerguntasTexto>
                        <img alt='' data-test="play-btn" src={SetaPlay} onClick={() => addNumerosCards(i + 1)} />
                    </CaixaPerguntaFechada>)}

                {pergunta && numeroCards == (i + 1) && (
                    <CaixaPerguntaAberta key={i}>
                        <h1 data-test="flashcard-text" >{c.question}</h1>
                        <PerguntasImagem data-test="turn-btn" onClick={() => mostrarResposta()} src={SetaVirar} />
                    </CaixaPerguntaAberta>
                )}

                {resposta && numeroCards == (i + 1) && (
                    <CaixaPerguntaAberta key={i}>
                        <h1 data-test="flashcard-text">{c.answer}</h1>
                        <Botoes>
                            <BotaoVermelho data-test="no-btn" onClick={() => esconderTudo(Errado, i)} >Não lembrei</BotaoVermelho>
                            <BotaoAmarelo data-test="partial-btn" onClick={() => esconderTudo(Quase, i)} >Quase não lembrei</BotaoAmarelo>
                            <BotaoVerde data-test="zap-btn" onClick={() => esconderTudo(Certo, i)}>Zap!</BotaoVerde>
                        </Botoes>
                    </CaixaPerguntaAberta>
                )}

                {resultado && cardsRespondidas.includes(i) && (
                    <CaixaPerguntaFechada key={i}>
                        <PerguntasTexto
                            corNo={errados.includes(i)} corPartial={quases.includes(i)} corZap={certos.includes(i)}
                            sublinhar={cardsRespondidas.includes(i)}
                            data-test="flashcard-text">Pergunta {i + 1}</PerguntasTexto>
                        <img alt=''
                            data-test={errados.includes(i) && 'no-icon' || quases.includes(i) && 'partial-icon' || certos.includes(i) && 'zap-icon'}
                            src={errados.includes(i) && Errado || quases.includes(i) && Quase || certos.includes(i) && Certo} />
                    </CaixaPerguntaFechada>
                )}

            </>

            )}

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
  text-decoration: ${props => props.sublinhar && 'line-through'};
  color: ${props => props.corNo && '#FF3030'} ${props => props.corPartial && '#FF922E'} ${props => props.corZap && '#2FBE34'};
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
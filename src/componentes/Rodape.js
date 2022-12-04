import styled from "styled-components"
import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'
import Party from '../zaprecall/assets/img/party.png'
import Sad from '../zaprecall/assets/img/sad.png'

export default function Rodape({ cards, respondidas, iconeResposta }) {

    return (
        <Footer data-test="footer">
            <Respostas>
            {(respondidas/cards.length === 1) && (iconeResposta.includes(Errado)) && <img src={Sad} alt='' />}
            {(respondidas/cards.length === 1) && (iconeResposta.includes(Errado)) && <Negrito data-test="finish-text">Putz...</Negrito>}

            {(respondidas/cards.length === 1) && (!iconeResposta.includes(Errado)) && <img src={Party} alt='' />}
            {(respondidas/cards.length === 1) && (!iconeResposta.includes(Errado)) && <Negrito data-test="finish-text">Parabéns!</Negrito>}
            </Respostas>

            {(respondidas/cards.length === 1) && (iconeResposta.includes(Errado)) && <TextoBonus data-test="finish-text">Ainda faltam alguns...Mas não desanime!</TextoBonus>}
            {(respondidas/cards.length === 1) && (!iconeResposta.includes(Errado)) && <TextoBonus data-test="finish-text">Você não esqueceu de nenhum flashcard!</TextoBonus>}


            {respondidas}/{cards.length} CONCLUÍDOS
            <Respostas>
                {iconeResposta.map((i) => <img alt=""
                    data-test={i === Errado && 'no-icon' || i === Quase && 'partial-icon' || i === Certo && 'zap-icon'}
                    src={i} />)}
            </Respostas>

        </Footer>
    )
}

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
margin-top: 5px;
display: flex;
width: 100%;
justify-content: center;
`;
const TextoBonus = styled.div`
margin: 10px auto;
text-align: center;
width: 220px;
`;
const Negrito = styled.p`
font-weight: 700;
`;
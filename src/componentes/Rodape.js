import styled from "styled-components"
import Certo from '../zaprecall/assets/img/icone_certo.png'
import Quase from '../zaprecall/assets/img/icone_quase.png'
import Errado from '../zaprecall/assets/img/icone_erro.png'

export default function Rodape({ cards, respondidas, iconeResposta }) {
    return (
        <Footer data-test="footer">
            {respondidas}/{cards.length} CONCLUÍDOS
            <Respostas>
                {iconeResposta.map((i) => <img 
                data-test={i == Certo && 'no-icon' || i == Quase && 'partial-icon' || i == Errado && 'zap-icon'}
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
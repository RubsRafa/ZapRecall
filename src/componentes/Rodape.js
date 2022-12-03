import styled from "styled-components"

export default function Rodape({ cards, respondidas, iconeResposta }) {
    return (
        <Footer data-test="footer">
            {respondidas}/{cards.length} CONCLUÍDOS
            <Respostas>
                {iconeResposta.map((i) => <img src={i} />)}
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
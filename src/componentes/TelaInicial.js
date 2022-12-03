import Logo from '../zaprecall/assets/img/logo.png';
import styled from 'styled-components';

export default function TelaInicial( {setStart}) {
    return (
        <Container>
            <LogoContainer>
                <img src={Logo} />
                <h1>ZapRecall</h1>
                <CaixaIniciar>
                    <h1 data-test="start-btn" onClick={() => setStart(true)}>Iniciar Recall</h1>
                </CaixaIniciar>
            </LogoContainer>
        </Container>
    )
}

const LogoContainer = styled.div`
  margin: 120px auto;
  text-align: center;
  img {
    width: 136px;
    margin-top: 100px;
  }
  h1 {
    text-align: center;
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;
  color: #FFFFFF;
  margin: 30px auto;
  }
`;
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
const CaixaIniciar = styled.div`
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
  h1 {
    font-family: Recursive, sans-serif;
font-weight: 400;
font-size: 18px;
color: #D70900;    
  }
`;

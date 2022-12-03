
import React, { useState } from 'react';
import MainPrincipal from './componentes/MainPrincipal';
import TelaInicial from './componentes/TelaInicial';


export default function App() {

  const [start, setStart] = useState(false);

  return (
    <>
    {start ? <MainPrincipal /> : <TelaInicial setStart={setStart} />}
    </>
  );
}
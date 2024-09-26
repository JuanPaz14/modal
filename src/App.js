
import { useRef } from 'react';
import './App.css';
import {openModal} from './components/openModal';

function App() {

  const refButton1 = useRef(null);
  const refButton2 = useRef(null)

  function handleOpenModal(){
    const modal = "modalSettings";
    const title='Modal de Configuracion'
    openModal(modal,title,refButton1,refButton2);
  }

  function handleOpenModal2(){
    const modal = "modalAccount";
    const title='Modal de cuenta'
    openModal(modal,title,refButton1,refButton2);
  }


  return (
    <div className="App">
      <button onClick={handleOpenModal} ref={refButton1}>abrir modal config</button>
      <button onClick={handleOpenModal2} ref={refButton2}>abrir modal cuenta</button>
    </div>
  );
}

export default App;

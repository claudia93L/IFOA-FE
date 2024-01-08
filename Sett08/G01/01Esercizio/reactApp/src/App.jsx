import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ButtonComponent from '../src/components/ButtonComponent';
import ImageComponent from '../src/components/ImageComponent';
import ButtonSecondary from '../src/components/ButtonSecondary';
import ButtonFromParent from '../src/components/ButtonFromParent';

function App() {
  const [count, setCount] = useState(0);

  let btnText = 'Testo da genitore';

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ButtonComponent></ButtonComponent>
        <ButtonSecondary textContent='Soluzione alternativa'></ButtonSecondary>
        <ButtonFromParent testo={btnText}></ButtonFromParent>
        <ImageComponent></ImageComponent>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
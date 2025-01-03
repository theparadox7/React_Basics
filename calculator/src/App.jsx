import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult('');
  const deleteEL = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand">{result}</div>
      </div>
      <button className="span-two orange" onClick={clear}>
        AC
      </button>
      <button className="orange" onClick={deleteEL}>
        DEL
      </button>
      <button id="/" onClick={handleClick}>
        /
      </button>
      <button id="1" onClick={handleClick}>
        1
      </button>
      <button id="2" onClick={handleClick}>
        2
      </button>
      <button id="3" onClick={handleClick}>
        3
      </button>
      <button id="*" onClick={handleClick}>
        *
      </button>
      <button id="4" onClick={handleClick}>
        4
      </button>
      <button id="5" onClick={handleClick}>
        5
      </button>
      <button id="6" onClick={handleClick}>
        6
      </button>
      <button id="+" onClick={handleClick}>
        +
      </button>
      <button id="7" onClick={handleClick}>
        7
      </button>
      <button id="8" onClick={handleClick}>
        8
      </button>
      <button id="9" onClick={handleClick}>
        9
      </button>
      <button id="-" onClick={handleClick}>
        -
      </button>
      <button id="." onClick={handleClick}>
        .
      </button>
      <button id="0" className="orange" onClick={handleClick}>
        0
      </button>
      <button className="span-two orange" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App;

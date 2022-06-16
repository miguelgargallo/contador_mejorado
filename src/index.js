import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  /* line 8 == lines 11-13 */
  const [contadorValue, updateContador] = useState(13);

  /*
  const contador = useState(13);
  const contadorValue = contador[0];
  const updateContador = contador[1];
*/

  console.log("render");

  return (
    <div>
      <p>El valor del contador es</p>
      <h1>{contadorValue}</h1>
      <button>Incrementar</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);

import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
  /* line 8 == lines 11-13 */
  const [contadorValue, setContador] = useState(13);

  /*
  const contador = useState(13);
  const contadorValue = contador[0];
  const setContador = contador[1];
*/

  console.log("render");

  return (
    <div>
      <p>El valor del contador es</p>
      <h1>{contadorValue}</h1>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);

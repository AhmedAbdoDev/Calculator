import { useState } from "react";
import "./App.css";
function App() {
  let [result, setResult] = useState("");
  const buttons = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  function getResult() {
    try {
      // eslint-disable-next-line
      return eval(result.replaceAll("X", "*").replaceAll("%", "/100"));
    } catch (e) {
      return result;
    }
  }
  function caluclator(button) {
    if (button === "=") {
      setResult(String(getResult()));
    } else if (button === "C") setResult("");
    else if (button === "+-") {
      setResult(String(getResult() * -1));
    } else setResult(String(result + button));
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="header">
          <h1>Calculator</h1>
        </div>
        <div className="result">
          <input id="result" placeholder="0" value={result} readOnly />
        </div>
        <div className="lists">
          {buttons.map((c, i) => {
            return (
              <div className="list" key={i}>
                {c.map((d, i) => {
                  return (
                    <div
                      className={`button ${d === "=" ? " equal" : ""}`}
                      key={i}
                      onClick={() => caluclator(d)}
                    >
                      <p className="">{d}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import GameStart from "./components/GameStart";
import GamePlay from "./components/GamePlay";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <GameStart toggle={toggleGame} />}</>
    //Here toggle is passed as props so that in GameStart component the function can be called on the button click
  );
}
root.render(
  <>
    <App />
  </>
);

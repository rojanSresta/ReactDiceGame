import { useState } from "react";
import NumberSelector from "./NumberSelector";
import TopScore from "./TopScore";
import RoleDice from "./RoleDice";
import styled from "styled-components";
import { Button, ResetButton } from "./styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected a number.");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setDiceNumber(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <GameContainer>
      <div className="topSection">
        <TopScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice diceNumber={diceNumber} rollDice={rollDice} />
      <div className="btns">
        <ResetButton onClick={() => setScore(0)}>Reset Score</ResetButton>
        <Button onClick={() => setShowRule(!showRule)}>
          {!showRule ? "Show" : "Hide"} Rules
        </Button>
      </div>
      {showRule && <Rules />}
    </GameContainer>
  );
}

const GameContainer = styled.div`
  margin: 2rem;
  padding: 1rem;

  .topSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
export default GamePlay;

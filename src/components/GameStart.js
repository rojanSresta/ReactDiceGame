import styled from "styled-components";
import { Button } from "./styled/Button";

function GameStart({ toggle }) {
  return (
    <Container>
      <img src="./images/dices.png" alt="Dices" />
      <div className="content">
        <h1 id="header">DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  margin: auto;

  .content {
    display: flex;
    flex-direction: column;
  }

  #header {
    font-size: 5em;
  }
`;

export default GameStart;

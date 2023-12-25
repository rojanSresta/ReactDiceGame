import styled from "styled-components";
function RoleDice({ diceNumber, rollDice }) {
  return (
    <RoleDiceContainer>
      <img
        src={`/images/dice${diceNumber}.png`}
        alt=""
        width={150}
        onClick={rollDice}
      />
      <p>Click on Dice to roll</p>
    </RoleDiceContainer>
  );
}

const RoleDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 3em 0;

  img {
    cursor: pointer;
  }

  p {
    font-weight: 900;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 5px;
  }

  .btn {
    padding: 10px 5px;
    font-weight: bold;
    width: 12em;
    border: 1px solid black;
    background-color: white;
    color: black;
    cursor: pointer;
    font-size: medium;
    margin: 5px;
  }

  .btn:hover {
    background-color: whitesmoke;
    color: #031;
  }

  #showRule {
    color: white;
    background-color: black;
  }
  #showRule:hover {
    background-color: #012;
    color: whitesmoke;
  }
`;
export default RoleDice;

import styled from "styled-components";

function Rules() {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </RuleContainer>
  );
}

export default Rules;

const RuleContainer = styled.div`
  border: 1px solid transparent;
  background-color: whitesmoke;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2em;
  border-radius: 10px;
  padding: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

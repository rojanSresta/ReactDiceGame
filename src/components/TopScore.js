import styled from "styled-components";

function TopScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <h2>Total Score</h2>
    </ScoreContainer>
  );
}

export default TopScore;

const ScoreContainer = styled.div`
  h1 {
    font-size: 3.5em;
    position: relative;
    left: 2rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

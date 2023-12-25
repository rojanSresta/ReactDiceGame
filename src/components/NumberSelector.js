import styled from "styled-components";

function NumberSelector({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setError("");
    setSelectedNumber(value);
  };

  return (
    <NumberSelectorContainer>
      <p id="error" align="right">
        {error}
      </p>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <h2>Select Number</h2>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }

  h2 {
    margin-top: 1rem;
    position: relative;
    left: 11em;
  }
  #error {
    color: red;
    font-size: 1.4em;
    margin-bottom: 5px;
  }
`;

const Box = styled.div`
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  font-size: x-large;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  //here the isSelected props boolean value will be checked and bg-color will be given
`;

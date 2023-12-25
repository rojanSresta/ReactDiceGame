import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  height: 44px;
  padding: 10px 18px 10px 18px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #c5c2c2;
    border: 1px solid whitesmoke;
    color: black;
    transition: 0.3s background ease-in-out;
  }
`;

export const ResetButton = styled(Button)`
  background-color: #c5c2c2;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid whitesmoke;
    color: #c5c2c2;
    transition: 0.3s background ease-in-out;
  }
`;

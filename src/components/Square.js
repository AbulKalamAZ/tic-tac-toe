import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { checkWinner } from "../utils/helper";

const Square = ({ value, onClick, history, stepNum }) => {
  //check winner

  const winner = checkWinner(history[stepNum]);

  return (
    <StyledSquare isWinner={winner} onClick={onClick}>
      {value}
    </StyledSquare>
  );
};

// Mapping state to props
const mapStateToProps = (state) => {
  return {
    history: state.history,
    stepNum: state.stepNum,
  };
};

export default connect(mapStateToProps, null)(Square);
// Stlyed components

const StyledSquare = styled.button`
  width: 80px;
  height: 80px;
  margin: 8px;
  cursor: pointer;
  font-family: "Fredoka One", cursive;
  font-size: 64px;
  line-height: 1.2;
  font-weight: 500;
  background-color: #000;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: ${(props) => (props.isWinner ? "not-allowed" : "pointer")};
`;

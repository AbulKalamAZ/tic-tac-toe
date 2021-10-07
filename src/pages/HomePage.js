import React from "react";
import styled from "styled-components";

import SquareWrapper from "../components/SquareWrapper";
import Heart from "../components/Heart";

import { checkWinner } from "../utils/helper";
import { device } from "../utils/breakppoints";

import { connect } from "react-redux";

const HomePage = ({
  history,
  stepNum,
  isXNext,
  handleSquareclick,
  jumpToStep,
}) => {
  // check winner

  const winner = checkWinner(history[stepNum]);

  return (
    <>
      <StyledHomePage>
        <StyledTitle>Tic Tac Toe</StyledTitle>

        <StatusBoard>
          {winner
            ? `Winner is ${isXNext ? "O" : "X"}!!`
            : history.length === 10
            ? "Game Draw!"
            : isXNext
            ? "X's Turn"
            : "O's Turn"}
        </StatusBoard>

        <StyledContainer>
          <SquareWrapper
            square={history[stepNum]}
            onClick={handleSquareclick}
          />

          <StepsWrapper>
            {history.map((_step, move) => {
              const temp = move ? `Go to step #${move}` : "Restart";

              return (
                <li key={move}>
                  <button onClick={() => jumpToStep(move)}>{temp}</button>
                </li>
              );
            })}
          </StepsWrapper>
        </StyledContainer>
      </StyledHomePage>

      <CreditMessage>
        Made with <Heart /> by{" "}
        <Link href='mailto:myself.talukder@gmail.com'>Azad</Link>
      </CreditMessage>
    </>
  );
};

// mapping state to props

const mapStateToProps = (state) => {
  return {
    history: state.history,
    stepNum: state.stepNum,
    isXNext: state.isXNext,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSquareclick: (data) =>
      dispatch({ type: "SQUARE_BUTTON_CLICKED", payload: data }),
    jumpToStep: (data) =>
      dispatch({ type: "JUMP_TO_SPECIFIC_STEP", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// Styled component

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 24px;
  letter-spacing: 1px;
  word-spacing: 5px;
`;

const StyledContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const StatusBoard = styled.div`
  width: 35%;
  height: 70px;
  padding: 10px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  font-size: 32px;
  font-weight: 500px;
  color: #fff;
  border-radius: 6px;

  @media ${device.mobileL} {
    width: 100%;
    font-size: 28px;
    padding: 10px;
  }
`;

const StepsWrapper = styled.ul`
  min-width: 150px;
  height: auto;
  list-style: none;

  @media ${device.mobileL} {
    margin-top: 40px;
  }

  > li {
    width: 150px;
    margin: 10px 0;
    padding: 8px;
    background-color: #000;
    border-radius: 6px;

    > button {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      outline: 0;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      text-align: left;
      cursor: pointer;
    }
  }
`;

const CreditMessage = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
`;

const Link = styled.a`
  color: #000;
  padding-left: 6px;
`;

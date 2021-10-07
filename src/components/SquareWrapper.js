import React from "react";
import styled from "styled-components";

import Square from "./Square";

export default function SquareWrapper({ square, onClick }) {
  return (
    <StyledSquareWrapper>
      {/* Mapping the stateValue */}

      {square.map((item, i) => {
        return <Square key={i} value={item} onClick={() => onClick(i)} />;
      })}
    </StyledSquareWrapper>
  );
}

// Styled components

const StyledSquareWrapper = styled.div`
  width: 288px;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

import React from "react";
import { FC } from "react";
import styled from "styled-components";

export const Button: FC = () => {
  return (
    <StyledContainer
      onClick={() => {
        console.log("clicked!");
      }}
    >
      button
    </StyledContainer>
  );
};
const StyledContainer = styled.button`
  padding: 20px 30px;
  width: 200px;
`;

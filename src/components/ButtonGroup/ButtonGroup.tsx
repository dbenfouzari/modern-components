import * as React from "react";
import styled from "../../styled-components";
import { ButtonProps } from "../Button/Button";
import { StyledButton } from "../Button/Button.styles";

interface ButtonGroupProps {
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
}

const StyledGroup = styled.div`
  display: inline-flex;

  ${StyledButton}:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  ${StyledButton}:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${StyledButton} + ${StyledButton} {
    margin-left: -1px;
  }
`;

const ButtonGroup = ({ children }: ButtonGroupProps) => (
  <StyledGroup>{children}</StyledGroup>
);

export default ButtonGroup;

import styled, { css } from "../../styled-components";

export const StyledButton = styled.button<{ raised?: boolean }>`
  border-radius: 4px;
  border: 0 solid;
  border-bottom-width: 1px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  height: 30px;
  padding: 5px 10px;
  outline: none;

  &:hover {
    border-bottom-width: 3px;
  }

  &:active {
    background-color: ${props => props.theme.primary};
  }

  ${props =>
    props.raised
      ? css`
          background-color: ${props.theme.primaryLighter};
          color: #fff;
          border-color: ${props.theme.primary};
        `
      : css`
          background-color: #fff;
          color: ${props.theme.primaryLighter};
          border: 1px solid ${props.theme.primaryLighter};

          &:active {
            color: #fff;
            background-color: ${props.theme.primaryLighter};
          }
        `}
`;

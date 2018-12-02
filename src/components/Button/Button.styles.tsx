import darken from "polished/lib/color/darken";
import styled, { css } from "../../styled-components";

export const StyledButton = styled.button<{ raised?: boolean }>`
  border-radius: 4px;
  border: 0 solid;
  border-bottom-width: 1px;
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  outline: none;

  &:hover {
    border-bottom-width: 3px;
  }

  &:active {
    background-color: ${props => props.theme.belizeHole};
  }

  ${props =>
    props.raised
      ? css`
          background-color: ${props.theme.peterRiver};
          color: #fff;
          border-color: ${props.theme.belizeHole};
        `
      : css`
          background-color: #fff;
          color: ${props.theme.peterRiver};
          border: 1px solid ${props.theme.peterRiver};

          &:active {
            color: #fff;
            background-color: ${props.theme.peterRiver};
          }
        `}
`;

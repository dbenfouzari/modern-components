import styled, { css } from "../../styled-components";

export const Day = styled.span`
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
  display: inline-flex;
  height: 24px;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
`;

export const Cell = styled.div<{
  secondary?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  isBetween?: boolean;
}>`
  cursor: default;
  display: table-cell;
  font-size: 0.85em;
  text-align: center;
  vertical-align: middle;

  &:hover {
    ${Day} {
      background-color: ${props => props.theme.clouds};
      color: ${props => props.theme.wetAsphalt};
    }
  }

  ${props =>
    props.isToday
      ? css`
          color: ${props.theme.primaryLighter};
        `
      : null}

  ${props =>
    props.isSelected
      ? css`
          background-color: ${props.theme.primaryLighter};
          color: #fff;
        `
      : null}

  ${props =>
    props.isBetween
      ? css`
          background-color: ${props.theme.primaryLighter};
          color: #fff;
          opacity: 0.8;
        `
      : null}

  ${props =>
    props.secondary
      ? css`
          color: #ababab;
        `
      : null}
`;

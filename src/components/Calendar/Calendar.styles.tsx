import styled, { css } from "../../styled-components";

export const Day = styled.span<{
  isToday?: boolean;
  isSelected?: boolean;
  isBetween: boolean;
}>`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-flex;
  height: 24px;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  width: 24px;

  ${props =>
    props.isToday
      ? css`
          background-color: #ababab;
          color: #fff;
        `
      : null}

  ${props =>
    props.isSelected
      ? css`
          background-color: #ccc;
          border: 1px solid #999;
        `
      : null}

  ${props =>
    props.isBetween
      ? css`
          border: 1px solid #bbb;
        `
      : null}
`;

export const Cell = styled.div<{ secondary?: boolean }>`
  cursor: default;
  display: table-cell;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    ${Day} {
      background-color: ${props => props.theme.clouds};
      color: inherit;
    }
  }

  ${props =>
    props.secondary
      ? css`
          color: #ababab;
        `
      : null}
`;

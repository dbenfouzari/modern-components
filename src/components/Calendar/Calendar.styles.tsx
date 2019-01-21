import styled from "../../styled-components";

export const Day = styled.span`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: inline-flex;
  height: 24px;
  justify-content: center;
  transition: background-color 0.3s;
  width: 24px;
`;

export const Cell = styled.div`
  cursor: default;
  display: table-cell;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    ${Day} {
      background-color: ${props => props.theme.clouds};
    }
  }
`;

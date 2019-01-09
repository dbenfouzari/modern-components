import styled from "../../styled-components";

export const Cell = styled.div`
  display: table-cell;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
`;

export const Header = styled.div`
  display: table-row;
  height: 24px;

  ${Cell} {
    font-weight: bold;
  }
`;

export const Week = styled.div`
  height: 24px;
  display: table-row;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: table;
  table-layout: fixed;
  max-height: 500px;
  width: 200px;
`;

export const CalendarContent = styled.div`
  display: table-row-group;
`;

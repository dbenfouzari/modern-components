import styled, { css } from "../../styled-components";

export const Cell = styled.div<{ isToday?: boolean; isCurrentMonth?: boolean }>`
  display: table-cell;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;

  ${props =>
    !props.isCurrentMonth
      ? css`
          & > span {
            color: ${props.theme.asbestos};
          }
        `
      : null}

  ${props =>
    props.isToday
      ? css`
          & > span {
            align-items: center;
            background-color: ${props.theme.belizeHole};
            border-radius: 50%;
            color: #fff;
            display: inline-flex;
            height: 24px;
            justify-content: center;
            width: 24px;
          }
        `
      : null}
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

export const CalendarNavigation = styled.div`
  display: flex;
`;

export const SelectedMonth = styled.span`
  flex: 1;
`;

export const Arrows = styled.div``;

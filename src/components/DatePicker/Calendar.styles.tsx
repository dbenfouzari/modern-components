import styled, { css } from "../../styled-components";

export const CalendarContainer = styled.div<{ align?: "left" | "right" }>`
  background-color: #fff;
  border: 1px solid rgba(100, 100, 100, 0.2);
  box-shadow: 1px 1px 2px 0 rgba(100, 100, 100, 0.2);
  padding: 10px;
  position: absolute;
  top: calc(100% + 10px);

  ${props =>
    props.align === "right"
      ? css`
          right: 10px;
        `
      : css`
          left: 10px;
        `}
`;

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

export const Cell = styled.div<{
  isToday?: boolean;
  isCurrentMonth?: boolean;
  isCurrent?: boolean;
}>`
  display: table-cell;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    ${Day} {
      background-color: ${props => props.theme.clouds};
    }
  }

  ${props =>
    !props.isCurrentMonth
      ? css`
          color: ${props.theme.asbestos};
        `
      : null}

  ${props =>
    props.isToday
      ? css`
          ${Day} {
            background-color: ${props.theme.belizeHole};
            color: #fff;
          }
        `
      : null}

  ${props =>
    props.isCurrent
      ? css`
          ${Day} {
            background-color: ${props.theme.peterRiver};
            color: #fff;
          }
        `
      : null}
`;

export const Header = styled.div`
  display: table-row;
  height: 24px;
`;

export const StyledWeek = styled.div`
  display: table-row;
  height: 24px;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: table;
  max-height: 500px;
  table-layout: fixed;
  width: 200px;
`;

export const CalendarContent = styled.div`
  display: table-row-group;
`;

export const CalendarNavigation = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
`;

export const SelectedMonth = styled.span`
  flex: 1;
`;

export const Arrows = styled.div`
  align-items: center;
  display: flex;
  height: 24px;

  span {
    display: inline-flex;
    padding: 2px;
  }

  > span span {
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  > span:hover span {
    background-color: ${props => props.theme.clouds};
  }
`;

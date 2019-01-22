import * as React from "react";
import styled from "../../styled-components";
import { CalendarValueContext } from "./utils";

interface HeaderProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  numberOfMonths: number;
}

const StyledHeader = styled.div`
  color: rgba(150, 150, 150, 0.8);
  display: flex;
  flex: 1;
  font-size: 16px;
  margin: 0 0 10px 0;
`;

const Arrow = styled.div`
  cursor: default;
  user-select: none;
`;

const CurrentMonth = styled.div`
  flex: 1;
  text-align: center;
  text-transform: capitalize;
`;

const getHeader = (value: Date, numberOfMonths: number): string => {
  if (numberOfMonths === 1) {
    return value.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    });
  }

  const dates = [];

  for (let i = 0; i < numberOfMonths; i++) {
    const nextDate = new Date(value);
    nextDate.setMonth(nextDate.getMonth() + i);

    dates.push(
      nextDate.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      }),
    );
  }

  return dates.join(" - ");
};

const CalendarNavigationHeader = ({
  onPrevClick,
  onNextClick,
  numberOfMonths,
}: HeaderProps) => (
  <CalendarValueContext.Consumer>
    {calendarValue => (
      <StyledHeader>
        <Arrow onClick={onPrevClick}>{"<"}</Arrow>
        <CurrentMonth>{getHeader(calendarValue, numberOfMonths)}</CurrentMonth>
        <Arrow onClick={onNextClick}>{">"}</Arrow>
      </StyledHeader>
    )}
  </CalendarValueContext.Consumer>
);

export default CalendarNavigationHeader;

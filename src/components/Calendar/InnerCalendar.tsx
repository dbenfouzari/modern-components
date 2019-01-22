import * as React from "react";
import styled from "../../styled-components";
import { DateOrRange } from "./Calendar";
import { Cell, Day as StyledDay } from "./Calendar.styles";
import { getMonth, ValueContext } from "./utils";

const dayFormat = (day: Date): string =>
  day
    .getDate()
    .toString()
    .padStart(2, "0");

const StyledInner = styled.div`
  display: table;
  flex: 1;

  & + & {
    margin-left: 20px;
  }
`;

interface InnerCalendarProps {
  calendarDate: Date;
  onDayClick: (day: Date) => (event: React.MouseEvent<HTMLSpanElement>) => void;
  hoveredDate: Date | null;
  onDayHover: (day: Date) => (event: React.MouseEvent<HTMLSpanElement>) => void;
  onDayLeave: () => void;
}

const HeaderDays = () => (
  <div style={{ display: "table-row" }}>
    <Cell secondary={true}>L</Cell>
    <Cell secondary={true}>M</Cell>
    <Cell secondary={true}>M</Cell>
    <Cell secondary={true}>J</Cell>
    <Cell secondary={true}>V</Cell>
    <Cell secondary={true}>S</Cell>
    <Cell secondary={true}>D</Cell>
  </div>
);

const getIsToday = (day: Date) => {
  const today = new Date();
  const target = new Date(day);

  return (
    today.getMonth() === target.getMonth() &&
    today.getFullYear() === target.getFullYear() &&
    today.getDate() === target.getDate()
  );
};

class InnerCalendar extends React.PureComponent<InnerCalendarProps> {
  public render() {
    const {
      calendarDate,
      onDayClick,
      hoveredDate,
      onDayHover,
      onDayLeave,
    } = this.props;

    return (
      <StyledInner>
        <HeaderDays />

        <ValueContext.Consumer>
          {(value: DateOrRange) => {
            const getIsSelected = (day: Date): boolean => {
              if (value instanceof Date) {
                return value.getTime() === day.getTime();
              }

              if (
                value.startDate &&
                value.startDate.getTime() === day.getTime()
              ) {
                return true;
              }
              if (value.endDate && value.endDate.getTime() === day.getTime()) {
                return true;
              }

              return false;
            };

            const getIsBetween = (day: Date): boolean => {
              if (value instanceof Date) {
                return false;
              }

              if (value.startDate && value.endDate) {
                return (
                  day.getTime() > value.startDate.getTime() &&
                  day.getTime() < value.endDate.getTime()
                );
              }

              if (value.startDate && hoveredDate) {
                return (
                  day.getTime() > value.startDate.getTime() &&
                  day.getTime() < hoveredDate.getTime()
                );
              }

              return false;
            };

            return getMonth(new Date(calendarDate)).map((week, weekIndex) => (
              <div key={weekIndex} style={{ display: "table-row" }}>
                {week.map((day, dayIndex) => {
                  const extraProps = day
                    ? {
                        isBetween: getIsBetween(day),
                        isSelected: getIsSelected(day),
                        isToday: getIsToday(day),
                      }
                    : {};
                  return (
                    <Cell key={dayIndex} {...extraProps}>
                      {day ? (
                        <StyledDay
                          onClick={onDayClick(day)}
                          onMouseEnter={onDayHover(day)}
                          onMouseLeave={onDayLeave}
                        >
                          {dayFormat(day)}
                        </StyledDay>
                      ) : null}
                    </Cell>
                  );
                })}
              </div>
            ));
          }}
        </ValueContext.Consumer>
      </StyledInner>
    );
  }
}

export default InnerCalendar;

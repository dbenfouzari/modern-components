import * as React from "react";
import { StyledWeek } from "./Calendar.styles";
import Day from "./Day";

interface WeekProps {
  days: Date[];
  onDaySelect: (nextDay: Date) => void;
  dateFormat?: "DD";
  minDate?: Date;
  maxDate?: Date;
}

const Week = React.memo((props: WeekProps) => {
  const isDayDisabled = (day: Date): boolean => {
    if (props.minDate && day < props.minDate) return true;
    if (props.maxDate && day > props.maxDate) return true;
    return false;
  };
  const handleDaySelect = (day: Date) => () => {
    return isDayDisabled(day) ? null : props.onDaySelect(day);
  };

  return (
    <StyledWeek>
      {props.days.map(day => (
        <Day
          key={day.toISOString()}
          day={day}
          dateFormat={props.dateFormat}
          onClick={handleDaySelect(day)}
          disabled={isDayDisabled(day)}
        />
      ))}
    </StyledWeek>
  );
});

export default Week;

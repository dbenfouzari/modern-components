import * as React from "react";
import { StyledWeek } from "./Calendar.styles";
import Day from "./Day";

interface WeekProps {
  days: Date[];
  onDaySelect: (nextDay: Date) => void;
  dateFormat?: "DD";
}

const Week = React.memo((props: WeekProps) => {
  const handleDaySelect = (day: Date) => () => props.onDaySelect(day);

  return (
    <StyledWeek>
      {props.days.map(day => (
        <Day
          key={day.toISOString()}
          day={day}
          dateFormat={props.dateFormat}
          onClick={handleDaySelect(day)}
        />
      ))}
    </StyledWeek>
  );
});

export default Week;

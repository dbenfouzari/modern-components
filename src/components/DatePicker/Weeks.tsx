import * as React from "react";
import { CalendarContent } from "./Calendar.styles";
import Week from "./Week";

interface WeekProps {
  weeks: Date[][];
  onDaySelect: (nextDay: Date) => void;
  dateFormat?: "DD";
  minDate?: Date;
  maxDate?: Date;
}

const Weeks = React.memo((props: WeekProps) => {
  return (
    <CalendarContent>
      {props.weeks.map((days, weekIndex) => (
        <Week
          key={weekIndex}
          days={days}
          onDaySelect={props.onDaySelect}
          dateFormat={props.dateFormat}
          minDate={props.minDate}
          maxDate={props.maxDate}
        />
      ))}
    </CalendarContent>
  );
});

export default Weeks;

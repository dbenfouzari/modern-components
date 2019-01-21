import * as React from "react";
import { Cell, Day as StyledDay } from "./Calendar.styles";
import { getMonth } from "./utils";

const dayFormat = (day: Date): string =>
  day
    .getDate()
    .toString()
    .padStart(2, "0");

class InnerCalendar extends React.PureComponent {
  public render() {
    return (
      <div style={{ display: "table", flex: 1 }}>
        {getMonth(new Date(2019, 0)).map((week, weekIndex) => (
          <div key={weekIndex} style={{ display: "table-row" }}>
            {week.map((day, dayIndex) => (
              <Cell key={dayIndex}>
                <StyledDay>{dayFormat(day)}</StyledDay>
              </Cell>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default InnerCalendar;

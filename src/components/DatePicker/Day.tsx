import moment from "moment";
import * as React from "react";
import { Cell, Day as StyledDay } from "./Calendar.styles";

import { CurrentDateContext } from "./Calendar";

interface DayProps {
  day: Date;
  onClick: (smth: any) => void;
  dateFormat?: "DD";
}

const Day = React.memo(({ day, onClick, dateFormat }: DayProps) => {
  return (
    <CurrentDateContext.Consumer>
      {currentDate => {
        const isCurrentMonth =
          new Date(day).getFullYear() === new Date(currentDate).getFullYear() &&
          new Date(day).getMonth() === new Date(currentDate).getMonth();

        const isToday =
          new Date(day).toLocaleDateString() ===
          new Date().toLocaleDateString();

        const isCurrent =
          new Date(day).toLocaleDateString() ===
          new Date(currentDate).toLocaleDateString();

        return (
          <Cell
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            isCurrent={isCurrent}
            onClick={onClick}
          >
            <StyledDay>
              {moment(day.toISOString()).format(dateFormat)}
            </StyledDay>
          </Cell>
        );
      }}
    </CurrentDateContext.Consumer>
  );
});

export default Day;

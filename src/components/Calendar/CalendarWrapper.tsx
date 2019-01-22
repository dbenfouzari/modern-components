import * as React from "react";
import CalendarNavigationHeader from "./CalendarNavigationHeader";
import InnerCalendar from "./InnerCalendar";

interface WrapperProps {
  children:
    | React.ReactElement<InnerCalendar>
    | Array<React.ReactElement<InnerCalendar>>;
  onPrevClick: () => void;
  onNextClick: () => void;
  numberOfMonths: number;
}

const CalendarWrapper = ({
  children,
  onPrevClick,
  onNextClick,
  numberOfMonths,
}: WrapperProps) => (
  <div
    className="calendar-container"
    style={{
      border: "1px solid rgba(150, 150, 150, 0.2)",
      boxShadow: "2px 2px 6px rgba(150, 150, 150, 0.2)",
      display: "flex",
      flexDirection: "column",
      fontSize: "16px",
      maxWidth: numberOfMonths * 170 + (numberOfMonths - 1) * 20,
      minWidth: numberOfMonths * 170 + (numberOfMonths - 1) * 20,
      padding: 10,
    }}
  >
    <CalendarNavigationHeader
      onPrevClick={onPrevClick}
      onNextClick={onNextClick}
      numberOfMonths={numberOfMonths}
    />

    <div style={{ display: "flex", flex: 1 }}>{children}</div>
  </div>
);

export default CalendarWrapper;

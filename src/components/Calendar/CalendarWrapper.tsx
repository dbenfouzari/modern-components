import * as React from "react";
import CalendarNavigationHeader from "./CalendarNavigationHeader";
import InnerCalendar from "./InnerCalendar";

interface WrapperProps {
  children:
    | React.ReactElement<InnerCalendar>
    | Array<React.ReactElement<InnerCalendar>>;
}

const CalendarWrapper = ({ children }: WrapperProps) => (
  <div
    className="calendar-container"
    style={{ display: "flex", flexDirection: "column", minWidth: 170 }}
  >
    <CalendarNavigationHeader />

    <div style={{ display: "flex", flex: 1 }}>{children}</div>
  </div>
);

export default CalendarWrapper;

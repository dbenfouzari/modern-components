import * as React from "react";
import { Cell, Header } from "./Calendar.styles";

const CalendarHeader = React.memo(() => (
  <Header>
    <Cell isCurrentMonth={false}>L</Cell>
    <Cell isCurrentMonth={false}>M</Cell>
    <Cell isCurrentMonth={false}>M</Cell>
    <Cell isCurrentMonth={false}>J</Cell>
    <Cell isCurrentMonth={false}>V</Cell>
    <Cell isCurrentMonth={false}>S</Cell>
    <Cell isCurrentMonth={false}>D</Cell>
  </Header>
));

export default CalendarHeader;

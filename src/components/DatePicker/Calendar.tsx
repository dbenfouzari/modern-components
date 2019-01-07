import moment from "moment";
import "moment/locale/fr";
import * as React from "react";

const generateWeek = (startDate: Date, endDate: Date) => {
  const daysBetween = moment(endDate).diff(moment(startDate), "days");

  const cells = [];

  for (let i = 0; i < daysBetween; i++) {
    cells.push(
      generateDayCell(
        moment(startDate)
          .add(i, "days")
          .toDate()
      )
    );
  }

  return (
    <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
      {cells}
    </div>
  );
};

const generateDayCell = (day: Date) => {
  return (
    <div style={{ flex: 1 }} key={day.toISOString()}>
      {moment(day.toISOString()).format("YYYY-MM-DD")}
    </div>
  );
};

const generateMonth = (month: Date) => {
  const rows = [];

  const firstDayOfMonth = moment(month)
    .startOf("month")
    .startOf("week");
  const lastDayOfMonth = moment(month)
    .endOf("month")
    .endOf("week");

  const weeksBetween =
    moment(lastDayOfMonth).diff(firstDayOfMonth, "weeks") + 1;

  for (let i = 0; i < weeksBetween; i++) {
    rows.push(
      generateWeek(
        moment(month)
          .startOf("month")
          .startOf("week")
          .add(i, "week")
          .toDate(),
        moment(month)
          .startOf("month")
          .startOf("week")
          .add(i + 1, "week")
          .toDate()
      )
    );
  }

  return rows;
};

const Calendar = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh"
      }}
    >
      {generateMonth(new Date(2019, 0, 1))}
    </div>
  );
};

export default Calendar;

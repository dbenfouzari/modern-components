import moment from "moment";
import "moment/locale/fr";
import * as React from "react";

type DateFormat = "DD";

interface CalendarProps {
  dateFormat?: DateFormat;
}

const generateWeek = (
  startDate: Date,
  endDate: Date,
  dateFormat: DateFormat
) => {
  const daysBetween = moment(endDate).diff(moment(startDate), "days");

  const cells = [];

  for (let i = 0; i < daysBetween; i++) {
    cells.push(
      generateDayCell(
        moment(startDate)
          .add(i, "days")
          .toDate(),
        dateFormat
      )
    );
  }

  return (
    <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
      {cells}
    </div>
  );
};

const generateDayCell = (day: Date, dateFormat: DateFormat) => {
  return (
    <div style={{ flex: 1 }} key={day.toISOString()}>
      {moment(day.toISOString()).format(dateFormat)}
    </div>
  );
};

const generateMonth = (month: Date, dateFormat: DateFormat) => {
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
          .toDate(),
        dateFormat
      )
    );
  }

  return rows;
};

const Calendar = ({ dateFormat = "DD" }: CalendarProps) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        maxHeight: 500,
        maxWidth: 500
      }}
    >
      {generateMonth(new Date(2019, 0, 1), dateFormat)}
    </div>
  );
};

export default Calendar;

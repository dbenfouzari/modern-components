import moment from "moment";

const generateWeek = (startDate: Date, endDate: Date) => {
  const daysBetween = moment(endDate).diff(moment(startDate), "days");

  const cells = [];

  for (let i = 0; i < daysBetween; i++) {
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + i);
    cells.push(nextDate);
  }

  return cells;
};

export const generateMonth = (month: Date) => {
  const rows = [];

  const firstDayOfMonth = moment(month)
    .startOf("month")
    .startOf("week");
  const lastDayOfMonth = moment(month)
    .endOf("month")
    .endOf("week");

  const weeksBetween = lastDayOfMonth.diff(firstDayOfMonth, "weeks") + 1;

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
      ),
    );
  }

  return rows;
};

(window as any).generateMonth = generateMonth;

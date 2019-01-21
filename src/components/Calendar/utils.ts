import moment from "moment";
import "moment/locale/fr";

const getWeek = (startDate: Date, endDate: Date): Date[] => {
  const numberOfDays: number = moment(endDate).diff(startDate, "days");
  const days: Date[] = [];

  for (let i = 0; i < numberOfDays; i++) {
    days.push(
      moment(startDate)
        .add(i, "days")
        .toDate(),
    );
  }

  return days;
};

export const getMonth = (month: Date): Date[][] => {
  const startOfMonth = moment(month)
    .startOf("month")
    .startOf("week")
    .toDate();
  const endOfMonth = moment(month)
    .endOf("month")
    .endOf("week")
    .toDate();

  const weeks: Date[][] = [];

  const numberOfWeeks = moment(endOfMonth).diff(startOfMonth, "weeks");

  for (let i = 0; i <= numberOfWeeks; i++) {
    weeks.push(
      getWeek(
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

  return weeks;
};

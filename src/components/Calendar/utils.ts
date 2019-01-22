import moment from "moment";
import "moment/locale/fr";
import { createContext } from "react";
import { DateOrRange } from "./Calendar";

export const CalendarValueContext = createContext<Date>(new Date());
export const ValueContext = createContext<DateOrRange>(new Date());

const getWeek = (
  startDate: Date,
  endDate: Date,
  month: Date,
): Array<Date | null> => {
  const numberOfDays: number = moment(endDate).diff(startDate, "days");
  const days: Array<Date | null> = [];

  for (let i = 0; i < numberOfDays; i++) {
    const nextDate = moment(startDate).add(i, "days");

    if (moment(nextDate).month() !== month.getMonth()) {
      days.push(null);
    } else {
      days.push(
        moment(startDate)
          .add(i, "days")
          .toDate(),
      );
    }
  }

  return days;
};

export const getMonth = (month: Date): Array<Array<Date | null>> => {
  const startOfMonth = moment(month)
    .startOf("month")
    .startOf("week")
    .toDate();
  const endOfMonth = moment(month)
    .endOf("month")
    .endOf("week")
    .toDate();

  const weeks: Array<Array<Date | null>> = [];

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
        month,
      ),
    );
  }

  return weeks;
};

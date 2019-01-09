import moment from "moment";
import "moment/locale/fr";
import * as React from "react";
import {
  CalendarContent,
  Cell,
  Header,
  Week,
  Wrapper
} from "./Calendar.styles";
import CalendarHeader from "./CalendarHeader";

type DateFormat = "DD";

interface CalendarProps {
  dateFormat?: DateFormat;
}

interface CalendarState {
  currentDate: Date;
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

  return <Week>{cells}</Week>;
};

const generateDayCell = (day: Date, dateFormat: DateFormat) => {
  return (
    <Cell key={day.toISOString()}>
      {moment(day.toISOString()).format(dateFormat)}
    </Cell>
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

class Calendar extends React.Component<CalendarProps, CalendarState> {
  public state = {
    currentDate: new Date(1991, 10, 21)
  };

  public render() {
    const { dateFormat = "DD" } = this.props;
    const { currentDate } = this.state;

    return (
      <div>
        <h2>
          {currentDate.getMonth() + 1} {currentDate.getFullYear()}
        </h2>

        <Wrapper>
          <CalendarHeader />

          <CalendarContent>
            {generateMonth(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate()
              ),
              dateFormat
            )}
          </CalendarContent>
        </Wrapper>

        <button onClick={this.handlePrevMonth}>Prev</button>
        <button onClick={this.handleNextMonth}>Next</button>
      </div>
    );
  }

  public handlePrevMonth = () => {
    const currentDate: Date = new Date(this.state.currentDate);
    currentDate.setMonth(currentDate.getMonth() - 1);

    this.setState({
      currentDate
    });
  };

  public handleNextMonth = () => {
    const currentDate: Date = new Date(this.state.currentDate);
    currentDate.setMonth(currentDate.getMonth() + 1);

    this.setState({
      currentDate
    });
  };
}

export default Calendar;

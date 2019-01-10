import CalendarIcon from "mdi-react/CalendarIcon";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import moment from "moment";
import "moment/locale/fr";
import * as React from "react";
import {
  Arrows,
  CalendarContent,
  CalendarNavigation,
  Cell,
  SelectedMonth,
  Week,
  Wrapper
} from "./Calendar.styles";
import CalendarHeader from "./CalendarHeader";

type DateFormat = "DD";

interface CalendarProps {
  value: Date;
  onChange: (nextDate: Date) => void;
  dateFormat?: DateFormat;
}

interface CalendarState {
  currentDate: Date;
}

const generateWeek = (
  startDate: Date,
  endDate: Date,
  {
    dateFormat,
    initialDate,
    onDateClick
  }: {
    dateFormat: DateFormat;
    initialDate: Date;
    onDateClick: (selectedDate: Date) => void;
  }
) => {
  const daysBetween = moment(endDate).diff(moment(startDate), "days");

  const cells = [];

  for (let i = 0; i < daysBetween; i++) {
    cells.push(
      generateDayCell(
        moment(startDate)
          .add(i, "days")
          .toDate(),
        { dateFormat, initialDate, onDateClick }
      )
    );
  }

  return (
    <Week key={[new Date(startDate), new Date(endDate)].join("---")}>
      {cells}
    </Week>
  );
};

const generateDayCell = (
  day: Date,
  {
    dateFormat,
    initialDate,
    onDateClick
  }: {
    dateFormat: DateFormat;
    initialDate: Date;
    onDateClick: (selectedDate: Date) => void;
  }
) => {
  const handleDateClick = () => onDateClick(day);

  return (
    <Cell
      key={day.toISOString()}
      isCurrentMonth={
        new Date(day).getFullYear() === new Date(initialDate).getFullYear() &&
        new Date(day).getMonth() === new Date(initialDate).getMonth()
      }
      isToday={
        new Date(day).toLocaleDateString() === new Date().toLocaleDateString()
      }
      onClick={handleDateClick}
    >
      <span>{moment(day.toISOString()).format(dateFormat)}</span>
    </Cell>
  );
};

const generateMonth = (
  month: Date,
  dateFormat: DateFormat,
  onDateClick: (selectedDate: Date) => void
) => {
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
        { dateFormat, initialDate: month, onDateClick }
      )
    );
  }

  return rows;
};

class Calendar extends React.Component<CalendarProps, CalendarState> {
  public state = {
    currentDate: new Date(this.props.value)
  };

  public render() {
    const { dateFormat = "DD" } = this.props;
    const { currentDate } = this.state;

    return (
      <div>
        <CalendarNavigation>
          <SelectedMonth>
            {moment(currentDate)
              .format("MMMM YYYY")
              .replace(/^\w/, (firstChar: string) => firstChar.toUpperCase())}
          </SelectedMonth>

          <Arrows>
            <span onClick={this.handleCurrentMonth}>
              <CalendarIcon />
            </span>
            <span onClick={this.handlePrevMonth}>
              <ChevronLeft />
            </span>
            <span onClick={this.handleNextMonth}>
              <ChevronRight />
            </span>
          </Arrows>
        </CalendarNavigation>

        <Wrapper>
          <CalendarHeader />

          <CalendarContent>
            {generateMonth(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate()
              ),
              dateFormat,
              this.handleDateSelect
            )}
          </CalendarContent>
        </Wrapper>

        <button onClick={this.handlePrevMonth}>Prev</button>
        <button onClick={this.handleNextMonth}>Next</button>
      </div>
    );
  }

  public handleDateSelect = (selectedDate: Date) => {
    this.props.onChange(selectedDate);
  };

  public handleCurrentMonth = () => {
    const currentDate: Date = new Date();

    this.setState({
      currentDate
    });
  };

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

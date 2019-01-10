import CalendarIcon from "mdi-react/CalendarIcon";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import moment from "moment";
import "moment/locale/fr";
import * as React from "react";
import {
  Arrows,
  CalendarContainer,
  CalendarContent,
  CalendarNavigation,
  Cell,
  Day,
  SelectedMonth,
  Week,
  Wrapper
} from "./Calendar.styles";
import CalendarHeader from "./CalendarHeader";
import Navigation from "./Navigation";

type DateFormat = "DD";

interface CalendarProps {
  value: Date;
  onChange: (nextDate: Date) => void;
  dateFormat?: DateFormat;
  align?: "left" | "right";
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
    onDateClick,
    currentDate
  }: {
    dateFormat: DateFormat;
    initialDate: Date;
    onDateClick: (selectedDate: Date) => void;
    currentDate: Date;
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
        { dateFormat, initialDate, onDateClick, currentDate }
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
    onDateClick,
    currentDate
  }: {
    dateFormat: DateFormat;
    initialDate: Date;
    onDateClick: (selectedDate: Date) => void;
    currentDate: Date;
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
      isCurrent={
        new Date(day).toLocaleDateString() ===
        new Date(currentDate).toLocaleDateString()
      }
      onClick={handleDateClick}
    >
      <Day>{moment(day.toISOString()).format(dateFormat)}</Day>
    </Cell>
  );
};

const generateMonth = (
  month: Date,
  dateFormat: DateFormat,
  onDateClick: (selectedDate: Date) => void,
  currentDate: Date
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
        { dateFormat, initialDate: month, onDateClick, currentDate }
      )
    );
  }

  return rows;
};

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  public state = {
    currentDate: new Date(this.props.value)
  };

  public render() {
    const { dateFormat = "DD", align } = this.props;
    const { currentDate } = this.state;

    return (
      <CalendarContainer align={align}>
        <Navigation
          onPrev={this.handlePrevMonth}
          onNext={this.handleNextMonth}
          onToday={this.handleCurrentMonth}
          currentDateString={moment(currentDate)
            .format("MMMM YYYY")
            .replace(/^\w/, (firstChar: string) => firstChar.toUpperCase())}
        />

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
              this.handleDateSelect,
              this.props.value
            )}
          </CalendarContent>
        </Wrapper>
      </CalendarContainer>
    );
  }

  public handleDateSelect = (selectedDate: Date) => {
    this.props.onChange(selectedDate);
  };

  public setDate = (nextDate: Date) => {
    if (nextDate.toDateString() !== this.state.currentDate.toDateString()) {
      this.setState({
        currentDate: nextDate
      });
    }
  };

  public handleCurrentMonth = () => {
    const currentDate: Date = new Date();

    this.setDate(currentDate);
  };

  public handlePrevMonth = () => {
    const currentDate: Date = new Date(this.state.currentDate);
    currentDate.setMonth(currentDate.getMonth() - 1);

    this.setDate(currentDate);
  };

  public handleNextMonth = () => {
    const currentDate: Date = new Date(this.state.currentDate);
    currentDate.setMonth(currentDate.getMonth() + 1);

    this.setDate(currentDate);
  };
}

export default Calendar;

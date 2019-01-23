import * as React from "react";
import CalendarWrapper from "./CalendarWrapper";
import InnerCalendar from "./InnerCalendar";
import { CalendarValueContext, ValueContext } from "./utils";

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export type DateOrRange = Date | DateRange;

interface CalendarProps<DateType extends DateOrRange> {
  value: DateType;
  onChange?: (nextDate: DateType) => void;
  numberOfMonths?: 1 | 2 | 3;
  minDate?: Date;
  maxDate?: Date;
}

interface CalendarState<DateType extends DateOrRange> {
  calendarDate: Date;
  today: Date;
  selected: DateType;
  isSelectingRange: boolean;
  hoveredDate: Date | null;
}

const convertDateToYearMonthDay = (date: Date): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(0);
  nextDate.setMinutes(0);
  nextDate.setSeconds(0);
  nextDate.setMilliseconds(0);

  return nextDate;
};

const getFirstDate = (date: DateOrRange): Date => {
  if (date instanceof Date) return date;
  return date.startDate || new Date();
};

class Calendar<DateType extends DateOrRange> extends React.Component<
  CalendarProps<DateType>,
  CalendarState<DateType>
> {
  public state: CalendarState<DateType> = {
    calendarDate: convertDateToYearMonthDay(getFirstDate(this.props.value)),
    hoveredDate: null,
    isSelectingRange: false,
    selected: this.props.value,
    today: new Date(),
  };

  public render() {
    const { numberOfMonths = 1, minDate, maxDate } = this.props;

    const renderInner = () => {
      const elms = [];

      for (let i = 0; i < numberOfMonths; i++) {
        const nextDate: Date = new Date(this.state.calendarDate);
        nextDate.setMonth(nextDate.getMonth() + i);

        elms.push(
          <InnerCalendar
            key={`inner-calendar-${i}`}
            calendarDate={nextDate}
            onDayClick={this.handleDayClick}
            hoveredDate={this.state.hoveredDate}
            onDayHover={this.handleMouseEnter}
            onDayLeave={this.handleMouseLeave}
            minDate={minDate}
            maxDate={maxDate}
          />,
        );
      }

      return elms;
    };

    return (
      <ValueContext.Provider value={this.state.selected}>
        <CalendarValueContext.Provider value={this.state.calendarDate}>
          <CalendarWrapper
            onPrevClick={this.handlePrevMonth}
            onNextClick={this.handleNextMonth}
            numberOfMonths={numberOfMonths}
          >
            {renderInner()}
          </CalendarWrapper>
        </CalendarValueContext.Provider>
      </ValueContext.Provider>
    );
  }

  public handleMouseEnter = (day: Date) => () => {
    const { maxDate } = this.props;

    const selectedDay: Date = maxDate
      ? maxDate.getTime() > day.getTime()
        ? day
        : maxDate
      : day;

    this.setState({ hoveredDate: selectedDay });
  };

  public handleMouseLeave = () => {
    this.setState({ hoveredDate: null });
  };

  public handlePrevMonth = () => {
    const nextDate = new Date(this.state.calendarDate);
    nextDate.setMonth(nextDate.getMonth() - 1);

    this.setState({
      calendarDate: nextDate,
    });
  };

  public handleNextMonth = () => {
    const nextDate = new Date(this.state.calendarDate);
    nextDate.setMonth(nextDate.getMonth() + 1);

    this.setState({
      calendarDate: nextDate,
    });
  };

  public handleDayClick = (day: Date) => () => {
    if (this.props.onChange) {
      if (this.props.value instanceof Date) {
        /**
         * That means this is a single date, not a date range
         * so we can just call the `onChange` event with the day
         */
        this.props.onChange(day as DateType);

        this.setState({ selected: day as DateType });
      } else {
        /**
         * If `startDate` is set, we can call `onChange` event with the right data
         * We also set in the state, so it's all okay
         */
        if (this.state.isSelectingRange) {
          this.props.onChange({
            endDate: day,
            startDate: (this.state.selected as DateRange).startDate,
          } as DateType);

          this.setState({
            isSelectingRange: false,
            selected: {
              endDate: day,
              startDate: (this.state.selected as DateRange).startDate,
            } as DateType,
          });
        } else {
          this.setState({
            isSelectingRange: true,
            selected: {
              endDate: null,
              startDate: day,
            } as DateType,
          });
        }
      }
    }
  };
}

// tslint:disable-next-line
class Example extends React.Component {
  public render() {
    return <Calendar value={{ startDate: new Date(), endDate: new Date() }} />;
  }
}

export default Calendar;

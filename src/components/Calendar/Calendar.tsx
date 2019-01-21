import * as React from "react";
import CalendarWrapper from "./CalendarWrapper";
import InnerCalendar from "./InnerCalendar";

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface CalendarProps<DateType extends Date | DateRange> {
  value: DateType;
  onChange?: (nextDate: DateType) => void;
  numberOfMonths?: 1 | 2 | 3;
}

interface CalendarState<DateType extends Date | DateRange> {
  calendarDate: Date;
  today: Date;
  selected: DateType | null;
  isSelectingRange: boolean;
}

const convertDateToYearMonthDay = (date: Date): Date => {
  const nextDate = new Date(date);
  nextDate.setHours(0);
  nextDate.setMinutes(0);
  nextDate.setSeconds(0);
  nextDate.setMilliseconds(0);

  return nextDate;
};

class Calendar<DateType extends Date | DateRange> extends React.Component<
  CalendarProps<DateType>,
  CalendarState<DateType>
> {
  public state: CalendarState<DateType> = {
    calendarDate: convertDateToYearMonthDay(new Date()),
    isSelectingRange: false,
    selected: this.props.value,
    today: new Date(),
  };

  public render() {
    const { numberOfMonths = 1 } = this.props;
    return (
      <CalendarWrapper>{this.renderInner(numberOfMonths)}</CalendarWrapper>
    );
  }

  public renderInner = (nb: number) => {
    const components = [];

    for (let i = 0; i < nb; i++) {
      components.push(<InnerCalendar key={`inner-calendar-${i}`} />);
    }

    return components;
  };

  public handleDayClick = (day: Date) => () => {
    if (this.props.onChange) {
      if (this.props.value instanceof Date) {
        /**
         * That means this is a single date, not a date range
         * so we can just call the `onChange` event with the day
         */
        this.props.onChange(day as DateType);
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

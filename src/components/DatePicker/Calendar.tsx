import moment from "moment";
import "moment/locale/fr";
import * as React from "react";
import { CalendarContainer, Wrapper } from "./Calendar.styles";
import CalendarHeader from "./CalendarHeader";
import Navigation from "./Navigation";
import { generateMonth } from "./utils";
import Weeks from "./Weeks";

type DateFormat = "DD";

interface CalendarProps {
  value: Date;
  onChange: (nextDate: Date) => void;
  dateFormat?: DateFormat;
  align?: "left" | "right";
  minDate?: Date;
  maxDate?: Date;
}

interface CalendarState {
  currentDate: Date;
}

export const CurrentDateContext = React.createContext(new Date());

class Calendar extends React.PureComponent<CalendarProps, CalendarState> {
  public state = {
    currentDate: new Date(this.props.value)
  };

  public render() {
    const { dateFormat = "DD", align, maxDate, minDate } = this.props;
    const { currentDate } = this.state;

    const weeks = generateMonth(currentDate);

    return (
      <CurrentDateContext.Provider value={currentDate}>
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

            <Weeks
              weeks={weeks}
              onDaySelect={this.handleDateSelect}
              dateFormat={dateFormat}
              minDate={minDate}
              maxDate={maxDate}
            />
          </Wrapper>
        </CalendarContainer>
      </CurrentDateContext.Provider>
    );
  }

  public handleDateSelect = (selectedDate: Date) => {
    if (selectedDate.toDateString() !== this.state.currentDate.toDateString()) {
      this.props.onChange(selectedDate);
    }
    this.setDate(selectedDate);
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

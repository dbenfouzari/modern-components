import * as React from "react";
import Calendar from "./Calendar";

interface DatePickerState {
  isCalendarShown: boolean;
}

class DatePicker extends React.Component<{}, DatePickerState> {
  state = {
    isCalendarShown: false
  };

  render () {
    const { isCalendarShown } = this.state;

    return (
      <div>
        <input type="text" />

        { isCalendarShown ? <Calendar /> : null }
      </div>
    )
  }
}

export default DatePicker;

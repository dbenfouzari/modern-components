import * as React from "react";
import Input from "../Input";
import Calendar from "./Calendar";

interface DatePickerProps {
  /**
   * The current date
   *
   * @since 0.0.1
   */
  value: Date;
  /**
   * Will be called on date select
   *
   * @since 0.0.1
   */
  onChange: (nextDate: Date) => void;
  /**
   * Calendar alignment
   *
   * @since 0.0.1
   * @default "left"
   */
  alignCalendar?: "left" | "right";
  /**
   * The minimum selectable date
   *
   * @since 0.0.1
   * @default undefined
   */
  minDate: Date;
  /**
   * The maximum selectable date
   *
   * @since 0.0.1
   * @default undefined
   */
  maxDate: Date;
}

interface DatePickerState {
  isCalendarShown: boolean;
}

/**
 * A simple date picker that works great !
 *
 * @since 0.0.1
 * @version 0.0.1
 */
class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  public state = {
    isCalendarShown: false
  };

  private datePickerRef = React.createRef<HTMLDivElement>();

  public render() {
    const { value, alignCalendar, maxDate, minDate } = this.props;
    const { isCalendarShown } = this.state;

    return (
      <div
        style={{ display: "inline-block", position: "relative" }}
        ref={this.datePickerRef}
      >
        <Input
          type="text"
          onFocus={this.handleInputFocus}
          value={value.toLocaleDateString()}
          onChange={this.handleInputChange}
        />

        {isCalendarShown ? (
          <Calendar
            value={value}
            onChange={this.handleChange}
            align={alignCalendar}
            minDate={minDate}
            maxDate={maxDate}
          />
        ) : null}
      </div>
    );
  }

  public handleChange = (nextValue: any) => {
    this.setState({ isCalendarShown: false });
    this.props.onChange(nextValue);
  };

  public handleInputChange = (nextValue: string) => {
    this.props.onChange(new Date(nextValue));
  };

  public handleInputFocus = () => {
    this.setState({ isCalendarShown: true });
  };

  public handleClickOutside = (event: any) => {
    if (
      this.datePickerRef.current &&
      !this.datePickerRef.current.contains(event.target)
    ) {
      this.setState({ isCalendarShown: false });
    }
  };

  public componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
}

export default DatePicker;

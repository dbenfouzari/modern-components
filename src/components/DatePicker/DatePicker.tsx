import * as React from "react";
import Input from "../Input";
import Calendar from "./Calendar";

interface DatePickerProps {
  value: Date;
  onChange: (nextDate: Date) => void;
}

interface DatePickerState {
  isCalendarShown: boolean;
}

class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  public state = {
    isCalendarShown: false
  };

  private inputRef = React.createRef<HTMLInputElement>();
  private datePickerRef = React.createRef<HTMLDivElement>();

  public render() {
    const { value, onChange } = this.props;
    const { isCalendarShown } = this.state;

    return (
      <div style={{ display: "inline-block" }} ref={this.datePickerRef}>
        <Input
          type="text"
          ref={this.inputRef}
          onFocus={this.handleInputFocus}
          value={value.toISOString()}
          onChange={this.handleInputChange}
        />

        {isCalendarShown ? (
          <Calendar value={value} onChange={this.props.onChange} />
        ) : null}
      </div>
    );
  }

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

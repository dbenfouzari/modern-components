import * as React from "react";
import {
  Input,
  InputWrapper,
  Option,
  OptionsWrapper,
  SelectWrapper,
  Tag
} from "./Select.styles";
import { mapValueToLabelForOptions } from "./utils";

interface OptionType {
  value: string | number;
  label: string | number;
}

interface KeyCodes {
  [asString: string]: number;
}

const KEY_CODES: KeyCodes = {
  BACKSPACE: 8,
  BOTTOM: 40,
  ENTER: 13,
  UP: 38
};

interface SelectProps {
  /**
   * The value
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  value: Array<OptionType["value"]>;
  /**
   * The handler
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  onChange: (nextValue: Array<OptionType["value"]>) => void;
  /**
   * This is the list of options you want to show to the user
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  options: OptionType[];
}

interface SelectState {
  currentInput: string;
  focusedOptionIndex: number;
  isOpen: boolean;
}

class Select extends React.Component<SelectProps, SelectState> {
  public state = {
    currentInput: "",
    focusedOptionIndex: -1,
    isOpen: false
  };

  public get notSelectedOptions(): OptionType[] {
    return this.props.options.filter(
      option => !this.props.value.includes(option.value)
    );
  }

  public get valueFilteredOptions(): OptionType[] {
    return this.notSelectedOptions.filter(option => {
      const regex = new RegExp(this.state.currentInput, "gi");
      return regex.test(option.label.toString());
    });
  }

  public onOptionRemove = (optionId: OptionType["value"]) => () => {
    const nextValue = [...this.props.value];
    const optionIndex = this.props.value.findIndex(val => val === optionId);

    nextValue.splice(optionIndex, 1);

    this.props.onChange(nextValue as any);
  };

  public handleFocus = () => {
    this.setState({ isOpen: true });
  };

  public handleBlur = () => {
    this.setState({ isOpen: false });
  };

  public handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      case KEY_CODES.BACKSPACE:
        if (event.currentTarget.value !== "") {
          return;
        }

        // Backspace pressed, but no value in the input.
        // So we should remove tag
        if (this.props.value.length) {
          const nextValue = [...this.props.value];
          nextValue.pop();
          this.props.onChange(nextValue);
        }
        break;

      case KEY_CODES.BOTTOM:
        event.preventDefault();
        if (this.valueFilteredOptions.length) {
          const targetIndex = this.state.focusedOptionIndex + 1;
          let target;

          if (this.valueFilteredOptions.length - 1 >= targetIndex) {
            target = targetIndex;
          } else {
            target = 0;
          }

          this.setState({ focusedOptionIndex: target });
        }
        break;

      case KEY_CODES.UP:
        event.preventDefault();
        if (this.valueFilteredOptions.length) {
          const targetIndex = this.state.focusedOptionIndex - 1;
          let target;

          if (targetIndex < 0) {
            target = this.valueFilteredOptions.length - 1;
          } else if (this.valueFilteredOptions.length - 1 >= targetIndex) {
            target = targetIndex;
          } else {
            target = targetIndex;
          }

          this.setState({ focusedOptionIndex: target });
        }
        break;

      case KEY_CODES.ENTER:
        event.preventDefault();
        if (this.state.focusedOptionIndex > -1) {
          const focusedOptionValue = this.valueFilteredOptions[
            this.state.focusedOptionIndex
          ].value;
          const nextValue = [...this.props.value, focusedOptionValue];
          this.props.onChange(nextValue);

          this.setState({
            currentInput: "",
            focusedOptionIndex: -1
          });
        }
        break;

      default:
        break;
    }
  };

  public mapLabelToSearch = (label: OptionType["label"]) => {
    if (this.state.currentInput) {
      const regex = new RegExp(`(${this.state.currentInput})`, "gi");
      return label.toString().replace(regex, "<b>$1</b>");
    }

    return label.toString();
  };

  public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentInput: event.currentTarget.value });
  };

  public handleOptionSelect = (optionId: OptionType["value"]) => () => {
    const nextValue = [...this.props.value];
    nextValue.push(optionId);
    this.props.onChange(nextValue);
  };

  public render() {
    const { isOpen, currentInput, focusedOptionIndex } = this.state;

    const mapValueToLabel = mapValueToLabelForOptions(this.props.options);

    return (
      <SelectWrapper>
        <InputWrapper isOpen={isOpen}>
          {this.props.value.map(value => (
            <Tag key={value}>
              {mapValueToLabel(value)}
              <span onClick={this.onOptionRemove(value)}>&times;</span>
            </Tag>
          ))}

          <Input
            value={currentInput}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
          />
        </InputWrapper>

        {isOpen ? (
          <OptionsWrapper>
            {this.valueFilteredOptions.length > 0 ? (
              this.valueFilteredOptions.map((option, optionIndex) => (
                <Option
                  key={option.value}
                  onMouseDown={this.handleOptionSelect(option.value)}
                  isFocused={focusedOptionIndex === optionIndex}
                  dangerouslySetInnerHTML={{
                    __html: this.mapLabelToSearch(option.label)
                  }}
                />
              ))
            ) : (
              <Option>No result</Option>
            )}
          </OptionsWrapper>
        ) : null}
      </SelectWrapper>
    );
  }
}

export default Select;

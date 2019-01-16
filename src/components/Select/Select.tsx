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

export interface OptionType {
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

/**
 * It's (actually) a select where you can select multiple options
 */
const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
  const [currentInput, setCurrentInput] = React.useState("");

  const onFocus = () => {
    setIsOpen(true);
  };
  const onBlur = () => {
    setIsOpen(false);
  };

  const mapValueToLabel = mapValueToLabelForOptions(props.options);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.currentTarget.value);
  };

  const onOptionSelect = (optionId: OptionType["value"]) => () => {
    const nextValue = [...props.value];
    nextValue.push(optionId);
    props.onChange(nextValue);
  };

  const onOptionRemove = (optionId: OptionType["value"]) => () => {
    const nextValue = [...props.value];
    const optionIndex = props.value.findIndex(val => val === optionId);

    nextValue.splice(optionIndex, 1);

    props.onChange(nextValue as any);
  };

  const notSelectedOptions: OptionType[] = props.options.filter(
    option => !props.value.includes(option.value)
  );

  const valueFilteredOptions: OptionType[] = notSelectedOptions.filter(
    option => {
      const regex = new RegExp(currentInput, "gi");
      return regex.test(option.label.toString());
    }
  );

  const mapLabelToSearch = (label: OptionType["label"]) => {
    if (currentInput) {
      const regex = new RegExp(`(${currentInput})`, "gi");
      return label.toString().replace(regex, "<b>$1</b>");
    }

    return label.toString();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      case KEY_CODES.BACKSPACE:
        if (event.currentTarget.value !== "") {
          return;
        }

        // Backspace pressed, but no value in the input.
        // So we should remove tag
        if (props.value.length) {
          const nextValue = [...props.value];
          nextValue.pop();
          props.onChange(nextValue);
        }
        break;

      case KEY_CODES.BOTTOM:
        event.preventDefault();
        if (valueFilteredOptions.length) {
          const targetIndex = focusedOptionIndex + 1;
          let target;

          if (valueFilteredOptions.length - 1 >= targetIndex) {
            target = targetIndex;
          } else {
            target = 0;
          }

          setFocusedOptionIndex(target);
        }
        break;

      case KEY_CODES.UP:
        event.preventDefault();
        if (valueFilteredOptions.length) {
          const targetIndex = focusedOptionIndex - 1;
          let target;

          if (targetIndex < 0) {
            target = valueFilteredOptions.length - 1;
          } else if (valueFilteredOptions.length - 1 >= targetIndex) {
            target = targetIndex;
          } else {
            target = targetIndex;
          }

          setFocusedOptionIndex(target);
        }
        break;

      case KEY_CODES.ENTER:
        event.preventDefault();
        if (focusedOptionIndex > -1) {
          const focusedOptionValue =
            valueFilteredOptions[focusedOptionIndex].value;
          const nextValue = [...props.value, focusedOptionValue];
          props.onChange(nextValue);
          setFocusedOptionIndex(-1);
          setCurrentInput("");
        }
        break;

      default:
        break;
    }
  };

  return (
    <SelectWrapper>
      <InputWrapper isOpen={isOpen}>
        {props.value.map(value => (
          <Tag key={value}>
            {mapValueToLabel(value)}
            <span onClick={onOptionRemove(value)}>&times;</span>
          </Tag>
        ))}

        <Input
          value={currentInput}
          onChange={onInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>

      {isOpen ? (
        <OptionsWrapper>
          {valueFilteredOptions.length > 0 ? (
            valueFilteredOptions.map((option, optionIndex) => (
              <Option
                key={option.value}
                onMouseDown={onOptionSelect(option.value)}
                isFocused={focusedOptionIndex === optionIndex}
                dangerouslySetInnerHTML={{
                  __html: mapLabelToSearch(option.label)
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
};

export default Select;

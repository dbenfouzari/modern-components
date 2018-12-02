import * as React from "react";
import { CheckboxWrapper, StyledCheckbox } from "./Checkbox.styles";

interface InputProps {
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Value passed to the checkbox
   */
  value: boolean;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * The action that will be called when user checks/unchecks
   */
  onChange: (nextValue: boolean) => void;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * What will be aside to checkbox
   */
  children?: string;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Is it disabled ?
   */
  disabled?: boolean;
}

/**
 * @since 0.0.1
 * @version 0.0.1
 * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
 *
 * This is a simple input
 */
const Input = ({ value, onChange, children, disabled }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(":)");
    onChange(event.currentTarget.checked);
  };

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        disabled={disabled}
        type="checkbox"
        onChange={handleChange}
        defaultChecked={value}
      />
      <label>{children}</label>
    </CheckboxWrapper>
  );
};

export default Input;

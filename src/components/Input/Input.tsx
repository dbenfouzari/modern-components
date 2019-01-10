import * as React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Value passed to the input
   */
  value: string;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * The action that will be called when user types some text
   */
  onChange: (nextValue: string) => void;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Input type
   *
   * @default "text"
   */
  type?: "text" | "number" | "password";
  onFocus?: (event: React.FormEvent<HTMLInputElement>) => void;
  ref?: any;
}

/**
 * @since 0.0.1
 * @version 0.0.1
 * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
 *
 * This is a simple input
 */
const Input = ({
  value,
  onChange,
  type = "text",
  onFocus,
  ref
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      {...{ onFocus, ref }}
    />
  );
};

export default Input;

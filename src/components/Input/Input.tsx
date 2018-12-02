import * as React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps<T> {
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Value passed to the input
   */
  value: T;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * The action that will be called when user types some text
   */
  onChange: (nextValue: T) => void;
  /**
   * @since 0.0.1
   * @version 0.0.1
   *
   * Should show as raised ?
   *
   * @default "text"
   */
  type?: "text" | "number" | "password";
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
  type = "text"
}: InputProps<string | number>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return <StyledInput type={type} value={value} onChange={handleChange} />;
};

export default Input;

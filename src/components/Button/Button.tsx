import * as React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  /**
   * What will be shown in the button
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  children: JSX.Element | JSX.Element[] | string | number;
  /**
   * The action that will be called when user clicks
   *
   * @since 0.0.1
   * @version 0.0.1
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Should show as raised ?
   *
   * @since 0.0.1
   * @version 0.0.1
   * @default true
   */
  raised?: boolean;
  /**
   * Which button type ?
   *
   * @since 0.0.1
   * @version 0.0.1
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
}

/**
 * This is a simple button
 *
 * @since 0.0.1
 * @version 0.0.1
 * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
 */
export const Button = ({
  children,
  onClick,
  raised = true,
  type = "button"
}: ButtonProps) => (
  <StyledButton type={type} role="button" raised={raised} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;

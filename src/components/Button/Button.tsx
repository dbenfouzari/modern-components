import * as React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  /**
   * @since 0.0.1
   * @version 0.0.1
   * 
   * What will be shown in the button
   */
  children: JSX.Element | JSX.Element[] | string | number;
  /**
   * @since 0.0.1
   * @version 0.0.1
   * 
   * The action that will be called when user clicks
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @since 0.0.1
   * @version 0.0.1
   * @default true
   * 
   * Should show as raised ?
   */
  raised?: boolean;
  /**
   * @since 0.0.1
   * @version 0.0.1
   * @default "button"
   * 
   * Should show as raised ?
   */
  type?: "button" | "submit" | "reset";
}

/**
 * @since 0.0.1
 * @version 0.0.1
 * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
 * 
 * This is a simple button
 */
const Button = ({ children, onClick, raised = true, type = "button" }: ButtonProps) => (
  <StyledButton type={type} role="button" raised={raised} onClick={onClick}>{children}</StyledButton>
);

export default Button;

import * as React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  /**
   * @since 0.0.1
   * @version 0.0.1
   * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
   * 
   * What will be shown in the button
   */
  children: JSX.Element | JSX.Element[] | string | number;
  /**
   * @since 0.0.1
   * @version 0.0.1
   * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
   * 
   * The action that will be called when user clicks
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * @since 0.0.1
 * @version 0.0.1
 * @author Donovan BENFOUZARI <d.benfouzari@gmail.com>
 * 
 * This is a simple button
 */
const Button = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

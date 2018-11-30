import * as React from 'react';

const buttonStyles = {
  backgroundColor: '#f00',
  color: '#fff',
  border: 0,
  fontSize: 14,
  padding: '5px 10px',
  borderRadius: 2
};

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
  <button style={buttonStyles} onClick={onClick}>{children}</button>
);

export default Button;

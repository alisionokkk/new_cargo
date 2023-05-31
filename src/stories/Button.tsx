import React from 'react';
import './button.css';
export const Colors = {
  B500: '#60C1D4',
  B200: '#B7D9E4',
  B800: '#052236',
  W100: '#FFFFFF',
  BABABA: '#BABABA',
}
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  
  backgroundColor?: 'B500' | 'B800' | 'BABABA';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;


}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor = "B800",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--addRole' : 'storybook-button--addName';
  return (
    <button
      type="button"
      className={['storybook-button','storybook-button:hover', `storybook-button--${size}`,`storybook-button--${backgroundColor}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

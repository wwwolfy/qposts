import React from 'react';
import './Input.scss';

interface IInputProps {
  name: string;
  value: string;
  isDisabled?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input = (props: IInputProps) => {
  const { name, value, isDisabled, type } = props;
  const { placeholder } = props;
  const { onChange, onBlur, onFocus, onKeyDown } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type || 'text'}
      name={name}
      className="input"
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={handleOnChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    />
  );
};

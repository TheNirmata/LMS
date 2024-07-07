'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { InputLabel } from './label';

import CloseIcon from '../../../public/icons/close.svg';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

function ResetButton(
  props: Readonly<{
    onReset: () => void;
  }>
) {
  const { onReset } = props;

  const clickHandler = () => {
    onReset();
  };

  return (
    <div className="absolute w-12 h-12 top-1 right-0 flex items-center justify-center">
      <button type="button" onClick={clickHandler}>
        <CloseIcon />
      </button>
    </div>
  );
}

const InputExtended = ({ id, name, label, required, error, containerClassName, ...inputProps }: InputProps & Readonly<{
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  containerClassName?: string;
}>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>('');

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const resetHandler = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={cn('flex flex-col w-[32.875rem] mb-[1.875rem]', containerClassName)}>
      <InputLabel htmlFor={id} required={required}>{label}</InputLabel>
      <div className="relative">
        <Input
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={changeHandler}
          className="w-full h-auto text-base border-[3px] border-purple outline-purple outline-[3px] py-[13px] ps-[13px] pe-12 rounded-[4px]"
          ref={inputRef}
          {...inputProps}
        />
        {value && <ResetButton onReset={resetHandler} />}
      </div>
      {error && <small className="text-error text-xs ms-4 mt-1">{error}</small>}
    </div>
  );
};

export { Input, InputExtended };

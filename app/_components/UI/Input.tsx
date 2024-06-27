'use client';
import { ChangeEventHandler, useRef, useState } from 'react';
import AsteriskIcon from '../../../public/icons/asterisk.svg';
import CloseIcon from '../../../public/icons/close.svg';
import Label from './Label';

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

export default function Input(
  props: Readonly<{
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    containerClassname?: string;
  }>
) {
  const { id, name, label, placeholder, required, error, containerClassname } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  let containerStyle = "flex flex-col w-[32.875rem] mb-[1.875rem]";

  if(containerClassname) {
    containerStyle += ' ' + containerClassname;
  }

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const resetHandler = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={containerStyle}>
      <Label id={id} required={required}>{label}</Label>
      <div className="relative">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={changeHandler}
          className="w-full border-[3px] border-purple outline-purple outline-[3px] py-[13px] ps-[13px] pe-12 rounded-[4px]"
          ref={inputRef}
        />
        {value && <ResetButton onReset={resetHandler} />}
      </div>
      {error && <small className="text-error text-xs ms-4 mt-1">{error}</small>}
    </div>
  );
}

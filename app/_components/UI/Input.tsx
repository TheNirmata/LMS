'use client';
import { useState } from 'react';
import AsteriskIcon from '../../../public/icons/asterisk.svg';
import CloseIcon from '../../../public/icons/close.svg';

export default function Input(
  props: Readonly<{
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
  }>
) {
  const { id, name, label, placeholder, required, error } = props;
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col w-[32.875rem] mb-[1.875rem]">
      <label className="font-bold" htmlFor={id}>
        <span className="inline-block me-[3px] mb-2">{label}</span>
        {required && (
          <span className="inline-block align-top">
            <AsteriskIcon />
          </span>
        )}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          className="w-full border-[3px] border-purple outline-purple outline-[3px] py-[13px] ps-[13px] pe-12 rounded-[4px]"
        />
        {value && (
          <div className="absolute w-12 h-12 top-1 right-0 flex items-center justify-center">
            <div className="cursor-pointer">
              <CloseIcon />
            </div>
          </div>
        )}
      </div>
      {error && <small className="text-error text-xs ms-4 mt-1">{error}</small>}
    </div>
  );
}

'use client';
import { KeyboardEventHandler, MouseEventHandler, useState } from 'react';

export default function Checkbox(
  props: Readonly<{
    id: string;
    name: string;
    label: string;
    value: string;
  }>
) {
  const { id, name, label, value } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckedState = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const keyDownHandler: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const key = event.key;

    if (key === ' ' || key === 'Enter') {
      toggleCheckedState();
    }
  };

  return (
    <div className="flex items-center mb-[1.6875rem]">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={toggleCheckedState}
        checked={isChecked}
        className="hidden peer"
      />
      <div
        className="w-[1.8125rem] h-[1.8125rem] me-[.8125rem] border-[3px] border-black rounded-[4px] peer-checked:bg-primary focus-visible:border-primary focus-visible:outline-primary"
        onKeyDown={keyDownHandler}
        onClick={toggleCheckedState}
        tabIndex={0}
        role="checkbox"
        aria-checked={isChecked}
        aria-labelledby={`label-${id}`}
      ></div>
      <label htmlFor={id} id={`label-${id}`}>
        {label}
      </label>
    </div>
  );
}

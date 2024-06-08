import AsteriskIcon from '../../../public/icons/asterisk.svg';

function RequiredInputAsterisk() {
  return <AsteriskIcon className="inline ms-[2px]" />;
}

export default function Input(
  props: Readonly<{
    id: string;
    label: string;
    name: string;
    type: 'text' | 'number';
    placeholder: string;
    required?: boolean;
  }>
) {
  const { id, label, name, type, placeholder, required } = props;

  return (
    <div className="flex flex-col mb-[1.9375rem]">
      <label className="font-bold text-base" htmlFor={id}>
        {label}
        {required && <RequiredInputAsterisk />}
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} className="py-[6px] px-[11px] mt-2 bg-gray-light border border-gray-dark rounded-lg" />
    </div>
  );
}

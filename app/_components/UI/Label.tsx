import AsteriskIcon from '../../../public/icons/asterisk.svg';

export default function Label(
  props: Readonly<{
    children: React.ReactNode;
    id?: string;
    required?: boolean;
  }>
) {
  const { children, id, required } = props;

  return (
    <label className="font-bold" htmlFor={id}>
      <span className="inline-block me-[3px] mb-2">{children}</span>
      {required && (
        <span className="inline-block align-top">
          <AsteriskIcon />
        </span>
      )}
    </label>
  );
}

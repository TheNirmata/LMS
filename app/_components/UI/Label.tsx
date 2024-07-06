import AsteriskIcon from '../../../public/icons/asterisk.svg';

export default function Label(
  props: Readonly<{
    children: React.ReactNode;
    classname?: string;
    id?: string;
    required?: boolean;
  }>
) {
  const { children, classname, id, required } = props;
  let labelStyle = '';

  if(required) {
    labelStyle = 'font-bold';
  }

  if(classname) {
    labelStyle += ' ' + classname;
  }

  return (
    <label className={labelStyle} htmlFor={id}>
      <span className="inline-block me-[3px] mb-2">{children}</span>
      {required && (
        <span className="inline-block align-top">
          <AsteriskIcon />
        </span>
      )}
    </label>
  );
}

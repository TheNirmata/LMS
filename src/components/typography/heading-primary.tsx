export default function HeadingPrimary(
  props: Readonly<{
    className?: string;
    children?: React.ReactNode;
  }>
) {
  const { className, children } = props;
  let styles = 'font-bold text-[2rem] leading-[3rem]';

  if (className) {
    styles += ' ' + className;
  }

  return <h1 className={styles}>{children}</h1>;
}

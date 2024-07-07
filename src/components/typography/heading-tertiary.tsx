export default function HeadingTertiary(
  props: Readonly<{
    className?: string;
    children?: React.ReactNode;
  }>
) {
  const { className, children } = props;
  let styles = 'font-medium text-lg leading-6';

  if (className) {
    styles += ' ' + className;
  }

  return <h3 className={styles}>{children}</h3>;
}

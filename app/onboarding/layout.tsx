export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mt-[.875rem] mx-[13.75rem]">
      {children}
    </main>
  );
}

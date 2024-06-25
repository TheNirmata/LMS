export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[.875rem] px-[7.125rem]">
      <main className="ms-[12.875rem] me-[6.375rem]">
        {children}
      </main>
    </div>
  );
}

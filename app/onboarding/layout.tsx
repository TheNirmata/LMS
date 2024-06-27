export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mt-[.875rem] ms-[13.75rem] me-auto">
      {children}
    </main>
  );
}

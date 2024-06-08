import Link from 'next/link';
import Image from 'next/image';
import OnboardingNavigation from '../_components/OnboardingNavigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-[.875rem] px-[7.125rem]">
      <div className="mb-[3.4375rem]">
        <Link href="/">
          <Image
            src="/images/keelworks-logo.png"
            alt="KeelWorks Organisation Logo"
            width={282}
            height={67}
          />
        </Link>
      </div>
      <OnboardingNavigation />
      <main className="ms-[12.875rem] me-[6.375rem]">
        {children}
      </main>
    </div>
  );
}

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
        <Image
          src="/images/keelworks-logo.png"
          alt="KeelWorks Organisation Logo"
          width={282}
          height={67}
        />
      </div>
      <OnboardingNavigation />
      <main>
        <h1>ONBOARDING</h1>
        {children}
      </main>
    </div>
  );
}

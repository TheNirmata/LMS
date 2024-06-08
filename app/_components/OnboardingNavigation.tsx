'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { UrlObject } from 'url';

function NavLink(
  props: Readonly<LinkProps & { children: React.ReactNode; className: string }>
) {
  const { children, className, ...linkProps } = props;
  const pathname = usePathname();
  const linkPathnameProp = (linkProps.href as UrlObject).pathname;
  const linkFullPathname = '/onboarding/' + linkPathnameProp;
  const isActive = pathname === linkFullPathname;
  let style = 'text-2xl leading-9 text-center ' + className;

  if (isActive) {
    style += ' font-bold';
  }

  return (
    <Link className={style} {...linkProps}>
      {props.children}
    </Link>
  );
}

export default function OnboardingNavigation() {
  return (
    <nav className="flex gap-x-[5.6875rem] ps-[1.3125rem] mb-[4.0625rem]">
      <NavLink
        href={{ pathname: 'basic-information' }}
        className="w-[14.4375rem]"
      >
        Basic Information
      </NavLink>
      <NavLink href={{ pathname: 'profile' }} className="w-[11.9375rem]">
        Profile
      </NavLink>
      <NavLink href={{ pathname: 'background' }} className="w-[11.9375rem1]">
        Background
      </NavLink>
      <NavLink href={{ pathname: 'review' }} className="w-[7.875rem]">
        Review
      </NavLink>
    </nav>
  );
}

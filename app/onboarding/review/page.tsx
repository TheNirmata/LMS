import Link from 'next/link';
import Image from 'next/image';
import HeadingPrimary from '../../../src/components/typography/heading-primary';
import HeadingTertiary from '../../../src/components/typography/heading-tertiary';
import { InputLabel } from '@/components/ui/label';
import PencilIcon from '../../../public/icons/pencil.svg';
import PencilSolidIcon from '../../../public/icons/pencil-solid.svg';

function ReviewSection(props: Readonly<{
  children: React.ReactNode;
  title: React.ReactNode;
  href: string;
}>) {
  const { children, title, href } = props;

  return (
    <div>
      <div className="flex justify-between items-center mb-[.625rem]">
        <h4 className="font-bold text-2xl leading-[3rem]">{title}</h4>
        <Link href={href} className="font-bold text-link">
          <span className="inline-block me-2">Edit</span>
          <span className="inline-block align-bottom">
            <PencilIcon />
          </span>
        </Link>
      </div>
      <div className="border border-review-section-border rounded-lg">
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="mb-[1.4375rem]">
        <HeadingPrimary className="mb-[.3125rem]">Review</HeadingPrimary>
        <HeadingTertiary>
          Please review your profile information below.
        </HeadingTertiary>
      </div>
      <div className="flex flex-col gap-y-[.6875rem]">
        <ReviewSection title="Basic Information" href="/onboarding/basic-information">
          <div className="flex p-7">
            <div className="basis-[12.625rem]">
              <div className="relative w-[6.125rem] h-[6.125rem]">
                <Image src="/images/dummy-preview-profile-picture.png" alt="Dummy Preview Profile Picture" width={98} height={98} />
                <div className="absolute bottom-0 right-0 flex items-center justify-center h-8 w-8 bg-primary rounded-full">
                  <PencilSolidIcon />
                </div>
              </div>
            </div>
            <div className="flex-auto pt-[1.125rem]">
              <div className="grid grid-cols-[min-content_auto] grid-rows-3 gap-x-[1.4375rem] gap-y-16">
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>First Name</InputLabel>
                </div>
                <div>
                  <span className="font-bold text-xl leading-[1.875rem]">Terry</span>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Last Name</InputLabel>
                </div>
                <div>
                  <span className="font-bold text-xl leading-[1.875rem]">Smith</span>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Age</InputLabel>
                </div>
                <div>
                  <span className="font-bold text-xl leading-[1.875rem]">25</span>
                </div>
              </div>
            </div>
          </div>
        </ReviewSection>
        <ReviewSection title="Profile" href="/onboarding/profile">
          <div className="flex p-7">
            <div className="flex-auto pt-[1.125rem] ms-[12.625rem]">
              <div className="grid grid-cols-[min-content_auto] grid-rows-3 gap-x-[1.4375rem] gap-y-16">
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Education Level</InputLabel>
                </div>
                <div>
                  <span className="font-bold text-xl leading-[1.875rem]">Beginner</span>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Motivation</InputLabel>
                </div>
                <div>
                  <div className="flex gap-x-6 font-bold text-xl leading-[1.875rem]">
                    <span className="inline-block">Motivation #1</span>
                    <span className="inline-block">Motivation #2</span>
                  </div>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Areas of Interest</InputLabel>
                </div>
                <div>
                  <div className="flex gap-x-6 font-bold text-xl leading-[1.875rem]">
                    <span className="inline-block">Interests #1</span>
                    <span className="inline-block">Interests #2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReviewSection>
        <ReviewSection title="Background" href="/onboarding/background">
          <div className="flex p-7">
            <div className="flex-auto pt-[1.125rem] ms-[12.625rem]">
              <div className="grid grid-cols-[min-content_auto] grid-rows-3 gap-x-[1.4375rem] gap-y-16">
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Motivation</InputLabel>
                </div>
                <div>
                  <span className="font-bold text-xl leading-[1.875rem]">Beginner</span>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Job Interests</InputLabel>
                </div>
                <div>
                  <div className="flex gap-x-6 font-bold text-xl leading-[1.875rem]">
                    <span className="inline-block">Motivation #1</span>
                    <span className="inline-block">Motivation #2</span>
                  </div>
                </div>
                <div>
                  <InputLabel className="text-xl leading-[1.875rem] whitespace-nowrap mb-0" required={true}>Areas of Interest</InputLabel>
                </div>
                <div>
                  <div className="flex gap-x-6 font-bold text-xl leading-[1.875rem]">
                    <span className="inline-block">Interests #1</span>
                    <span className="inline-block">Interests #2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReviewSection>
      </div>
    </>
  );
}

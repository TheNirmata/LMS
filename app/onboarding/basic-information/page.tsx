import HeadingPrimary from '../../../src/components/typography/heading-primary';
import HeadingTertiary from '../../../src/components/typography/heading-tertiary';
import { InputExtended } from '@/components/ui/input';

export default function Page() {
  return (
    <>
      <div className="mb-[1.4375rem]">
        <HeadingPrimary className="mb-[.3125rem]">
          Basic Information
        </HeadingPrimary>
        <HeadingTertiary>
          Fill out your profile information below, so we can can understand
          better!
        </HeadingTertiary>
      </div>
      <form>
        <InputExtended
          id="first-name"
          name="first-name"
          label="First Name"
          placeholder="Please list your First Name"
          required={true}
          error="Please list your First Name"
        />
        <InputExtended
          id="last-name"
          name="last-name"
          label="Last Name"
          placeholder="Please list your Last Name"
          required={true}
          error="Please list your Last Name"
        />
        <InputExtended
          id="age"
          name="age"
          label="Age"
          placeholder="Please list your Age"
          required={true}
          error="Please list your Age"
        />
      </form>
    </>
  );
}

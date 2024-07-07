import HeadingPrimary from '../../../src/components/typography/heading-primary';
import HeadingTertiary from '../../../src/components/typography/heading-tertiary';
import ImagePicker from '../../../src/components/image-picker';
import { InputExtended } from '@/components/ui/input';

export default function Page() {
  return (
    <>
      <div className="mb-3">
        <HeadingPrimary className="mb-[.3125rem]">
          Profile Creation
        </HeadingPrimary>
        <HeadingTertiary>
          Fill out your profile information below, so we can can understand
          better!
        </HeadingTertiary>
      </div>
      <div className="flex gap-x-[2.125rem]">
        <div className="w-[30.125rem]">
          <ImagePicker />
        </div>
        <div className="w-[29.1875rem]">
          <form>
            <InputExtended
              id="username"
              name="username"
              label="Username"
              placeholder="Please list your Username"
              required={true}
              error="Please list your Username"
              containerClassName="w-[29.1875rem]"
            />
            <InputExtended
              id="highest-education-level"
              name="highest-education-level"
              label="Highest Education Level"
              placeholder="Please list your Highest Education Level"
              required={true}
              error="Please list your Highest Education Level"
              containerClassName="!w-[24.125rem]"
            />
            <InputExtended
              id="timezone"
              name="timezone"
              label="Select your timezone"
              placeholder="Please list your timezone"
              required={true}
              error="Please list your timezone"
              containerClassName="!w-[24.125rem]"
            />
          </form>
        </div>
      </div>
    </>
  );
}

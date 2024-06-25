import HeadingPrimary from '../../_components/Typography/HeadingPrimary';
import HeadingTertiary from '../../_components/Typography/HeadingTertiary';
import Input from '../../_components/UI/Input';

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
        <Input
          id="first-name"
          name="first-name"
          label="First Name"
          placeholder="Please list your First Name"
          required={true}
          error="Please list your First Name"
        />
        <Input
          id="last-name"
          name="last-name"
          label="Last Name"
          placeholder="Please list your Last Name"
          required={true}
          error="Please list your Last Name"
        />
        <Input
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

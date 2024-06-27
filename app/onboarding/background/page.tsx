import HeadingPrimary from '../../_components/Typography/HeadingPrimary';
import HeadingTertiary from '../../_components/Typography/HeadingTertiary';
import Checkbox from '../../_components/UI/Checkbox';
import Input from '../../_components/UI/Input';
import Label from '../../_components/UI/Label';

export default function Page() {
  return (
    <>
      <div className="mb-[1.4375rem]">
        <HeadingPrimary className="mb-[.3125rem]">Background</HeadingPrimary>
        <HeadingTertiary>
          Fill out your profile information below, so we can can understand
          better!
        </HeadingTertiary>
      </div>
      <div>
        <form>
          <div>
            <Label classname="text-2xl leading-9 mb-[.625rem]" required={true}>
              Motivation
            </Label>
            <p className="mb-4">
              Please select all applicable motivations. This helps us better
              understand you.
            </p>
            <Checkbox
              id="motivation--career-advancement"
              name="motivation"
              label="Career Advancement"
              value="motivation--career-advancement"
            />
            <Checkbox
              id="motivation--job-security"
              name="motivation"
              label="Job Security"
              value="motivation--job-security"
            />
            <Checkbox
              id="motivation--self-improvement"
              name="motivation"
              label="Self Improvement"
              value="motivation--self-improvement"
            />
            <Checkbox
              id="motivation--adapting-to-new-environment"
              name="motivation"
              label="Adapting to new environment"
              value="motivation--adapting-to-new-environment"
            />
            <Checkbox
              id="motivation--climb-up-the-corporate-ladder"
              name="motivation"
              label="Climb up the corporate ladder"
              value="motivation--climb-up-the-corporate-ladder"
            />
            <Checkbox
              id="motivation--networking"
              name="motivation"
              label="Networking"
              value="motivation--networking"
            />
            <Input
              id="motivation-other"
              name="motivation-other"
              label="Other"
              placeholder="Type your answer here"
              containerClassname="!w-[30.625rem] !mb-[3.0625rem]"
            />
          </div>
          <div>
            <Label classname="text-2xl leading-9 mb-[.625rem]" required={true}>
              Job Vocational Interests
            </Label>
            <p className="mb-4">
              Please select all job interests that apply to you.
            </p>
            <Checkbox
              id="job-vocational-interests--career-advancement"
              name="job-vocational-interests"
              label="Career Advancement"
              value="job-vocational-interests--career-advancement"
            />
            <Checkbox
              id="job-vocational-interests--job-security"
              name="job-vocational-interests"
              label="Job Security"
              value="job-vocational-interests--job-security"
            />
            <Checkbox
              id="job-vocational-interests--self-improvement"
              name="job-vocational-interests"
              label="Self Improvement"
              value="job-vocational-interests--self-improvement"
            />
            <Checkbox
              id="job-vocational-interests--adapting-to-new-environment"
              name="job-vocational-interests"
              label="Adapting to new environment"
              value="job-vocational-interests--adapting-to-new-environment"
            />
            <Checkbox
              id="job-vocational-interests--climb-up-the-corporate-ladder"
              name="job-vocational-interests"
              label="Climb up the corporate ladder"
              value="job-vocational-interests--climb-up-the-corporate-ladder"
            />
            <Checkbox
              id="job-vocational-interests--networking"
              name="job-vocational-interests"
              label="Networking"
              value="job-vocational-interests--networking"
            />
            <Input
              id="job-vocational-interests-other"
              name="job-vocational-interests-other"
              label="Other"
              placeholder="Type your answer here"
              containerClassname="!w-[30.625rem] !mb-[3.0625rem]"
            />
          </div>
        </form>
      </div>
    </>
  );
}

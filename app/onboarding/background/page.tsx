import HeadingPrimary from '../../_components/Typography/HeadingPrimary';
import HeadingTertiary from '../../_components/Typography/HeadingTertiary';
import Checkbox from '../../_components/UI/Checkbox';
import Input from '../../_components/UI/Input';
import Label from '../../_components/UI/Label';

type CheckboxGroup = {
  name: string;
  title: string;
  description: string;
  checkboxes: Array<{ id: string; label: string; value: string }>;
  other?: boolean;
};

const CHECKBOX_GROUPS: Array<CheckboxGroup> = [
  {
    name: 'motivation',
    title: 'Motivation',
    description:
      'Please select all applicable motivations. This helps us better understand you.',
    checkboxes: [
      {
        id: 'motivation--career-advancement',
        label: 'Career Advancement',
        value: 'motivation--career-advancement',
      },
      {
        id: 'motivation--job-security',
        label: 'Job Security',
        value: 'motivation--job-security',
      },
      {
        id: 'motivation--self-improvement',
        label: 'Self Improvement',
        value: 'motivation--self-improvement',
      },
      {
        id: 'motivation--adapting-to-new-environment',
        label: 'Adapting to new environment',
        value: 'motivation--adapting-to-new-environment',
      },
      {
        id: 'motivation--climb-up-the-corporate-ladder',
        label: 'Climb up the corporate ladder',
        value: 'motivation--climb-up-the-corporate-ladder',
      },
      {
        id: 'motivation--networking',
        label: 'Networking',
        value: 'motivation--networking',
      },
    ],
    other: true,
  },
  {
    name: 'job-vocational-interests',
    title: 'Job Vocational Interests',
    description: 'Please select all job interests that apply to you.',
    checkboxes: [
      {
        id: 'job-vocational-interests--career-advancement',
        label: 'Career Advancement',
        value: 'job-vocational-interests--career-advancement',
      },
      {
        id: 'job-vocational-interests--job-security',
        label: 'Job Security',
        value: 'job-vocational-interests--job-security',
      },
      {
        id: 'job-vocational-interests--self-improvement',
        label: 'Self Improvement',
        value: 'job-vocational-interests--self-improvement',
      },
      {
        id: 'job-vocational-interests--adapting-to-new-environment',
        label: 'Adapting to new environment',
        value: 'job-vocational-interests--adapting-to-new-environment',
      },
      {
        id: 'job-vocational-interests--climb-up-the-corporate-ladder',
        label: 'Climb up the corporate ladder',
        value: 'job-vocational-interests--climb-up-the-corporate-ladder',
      },
      {
        id: 'job-vocational-interests--networking',
        label: 'Networking',
        value: 'job-vocational-interests--networking',
      },
    ],
    other: true,
  },
];

function CheckboxGroup(props: Readonly<CheckboxGroup>) {
  const { name, title, description, checkboxes, other } = props;

  return (
    <div>
      <Label classname="text-2xl leading-9 mb-[.625rem]" required={true}>
        {title}
      </Label>
      <p className="mb-4">{description}</p>
      {checkboxes.map((checkboxProps) => (
        <Checkbox key={checkboxProps.id} name={name} {...checkboxProps} />
      ))}
      {other && (
        <Input
          id={name + '-other'}
          name={name + '-other'}
          label="Other"
          placeholder="Type your answer here"
          containerClassname="!w-[30.625rem] !mb-[3.0625rem]"
        />
      )}
    </div>
  );
}

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
          {CHECKBOX_GROUPS.map((checkboxGroupProps) => (
            <CheckboxGroup
              key={checkboxGroupProps.name}
              {...checkboxGroupProps}
            />
          ))}
        </form>
      </div>
    </>
  );
}

import Link from 'next/link';
import Input from '../../_components/UI/Input';

export default function Page() {
  return (
    <>
      <div className="mb-20">
        <h1 className="font-bold text-[2rem] leading-[3rem]">
          Basic information
        </h1>
        <p className="font-medium text-lg leading-6">
          Fill out your profile information below, so we can understand better!
        </p>
      </div>
      <div className="mb-[8.125rem] w-[32.9375rem]">
        <form>
          <Input
            id='first-name'
            label='First Name'
            name='first-name'
            type='text'
            placeholder='First Name'
            required={true}
          />
          <Input
            id='last-name'
            label='Last Name'
            name='last-name'
            type='text'
            placeholder='Last Name'
            required={true}
          />
          <Input
            id='age'
            label='Age'
            name='age'
            type='number'
            placeholder='Age'
            required={true}
          />
        </form>
      </div>
      <div className="flex justify-end mb-[4rem]">
        <Link className="flex justify-center items-center font-semibold text-lg w-[10.25rem] h-[3.75rem] bg-orange-light border border-orange-dark rounded-[1.875rem] shadow-next-button" href={{ pathname: 'profile' }}>Next</Link>
      </div>
    </>
  );
}

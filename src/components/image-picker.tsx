import Label from '../../app/_components/UI/Label';
import ProfilePicturePlaceholderIcon from '../../public/icons/profile-picture-placeholder.svg';
import UploadIcon from '../../public/icons/upload.svg';

export default function ImagePicker(props: Readonly<{}>) {
  return (
    <div className="w-full">
      <Label>Profile Picture</Label>
      <div className="flex flex-col justify-center py-[3.125rem] items-center w-full bg-image-picker-bg rounded-2xl">
        <div className="relative mb-[2.375rem]">
          <ProfilePicturePlaceholderIcon />
          <div className="absolute bottom-0 right-0 flex justify-center items-center w-[2.25rem] h-[2.25rem] bg-primary rounded-full cursor-pointer">
            <UploadIcon />
          </div>
        </div>
        <p className="mb-5">
          <span className="underline font-bold cursor-pointer">Click to upload</span> or drag and drop
        </p>
        <p>Max. File Size: 15MB</p>
      </div>
    </div>
  );
}

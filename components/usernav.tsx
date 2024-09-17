import Image from "next/image";
import icon1 from "@/public/assets/MyInfo/Icon1.svg";
import downarrow from "@/public/assets/MyInfo/down-arrow-icon.svg";
import useGetMe from "@/hooks/useGetMe";

export default function UserNav() {
  const { data: user } = useGetMe();

  return (
    <div className="flex min-h-52 w-full -mt-8 flex-col px-20 ">
      <div className="flex my-auto justify-between mx-5">
        <div className="flex items-center ">
          <Image
            src={user?.myProfile?.avatar}
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full ml-5 mt-1 z-10"
          />
          <h1 className="ml-16 -mt-11 font-inter text-[1.75rem] font-semibold">
            {user.myProfile.name}
          </h1>
        </div>
        <div className="flex items-center -mt-11 ">
          <a className="flex rounded-xl border border-solid p-1 border-slate-600 font-inter text-sm mr-3">
            Request a Change
            <Image className="ml-2" src={downarrow} alt="icon" width={14} />
          </a>
          <button className=" flex rounded-xl border border-solid p-1 ml-2 border-slate-600">
            <Image src={icon1} alt="icon" width={20} />
            <Image
              className="mt-1 ml-2"
              src={downarrow}
              alt="icon"
              width={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

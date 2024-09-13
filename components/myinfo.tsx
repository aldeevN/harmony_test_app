import useGetMe from "@/hooks/useGetMe";
import { Sheet } from "./ui/sheet";
import Image from "next/image";

export default function MyInfo() {
  const { data: user } = useGetMe()
  console.log(user.myProfile.name)
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Sheet>
          <h1>{user.myProfile.name}</h1>
          <Image src={user?.myProfile?.avatar} alt="avatar" width={150} height={150} className="rounded-full" />
        </Sheet>
      </div>
    </div>
  );
}

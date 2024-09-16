import icon from "@/public/assets/MyInfo/Icon.svg";
import icon1 from "@/public/assets/MyInfo/Icon1.svg";
import icon2 from "@/public/assets/MyInfo/Icon2.svg";
import exit from "@/public/assets/MyInfo/exit.svg";
import user from "@/public/assets/MyInfo/PersonalOffice.png";
import { Input } from "./ui/input";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex max-w-screen-2xl mx-auto pl-6 pr-6 -mt-5">
        <div className="flex  items-center ">
          <Link
            href="/"
            className="text-xl font-semibold leading-[normal] ml-6 pl-6"
          >
            <span>HarmonyHR</span>
          </Link>
        </div>
        <ul className="flex flex-col  text-lg font-normal lg:flex-row  mt-12 ml-16 mr-auto h-20">
          <li className="p-4">
            <Link href="#">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/myinfo/timeoff">My Info</Link>
          </li>
          <li className="p-4">
            <Link href="/people">People</Link>
          </li>
          <li className="p-4">
            <Link href="#">Hiring</Link>
          </li>
          <li className="p-4">
            <Link href="#">Reports</Link>
          </li>
          <li className="p-4">
            <Link href="#">Files</Link>
          </li>
        </ul>
        <div className="mt-8">
          <Input
            className="rounded-xl min-w-96 border-black mt-3 "
            type="text"
            placeholder="Search"
          />
        </div>
        <ul className="flex flex-row mt-4  font-normal self-center ml-14 mr-9">
          <li className="mr-0 p-3">
            <Image src={icon1} alt="icon" width={24} />
          </li>
          <li className="mr-0 p-3">
            <Image src={icon} alt="icon" width={24} />
          </li>
          <li className="mr-0 p-3">
            <Image src={icon2} alt="icon" width={24} />
          </li>
          <li className="mr-0 p-2 ">
            <Image src={user} alt="icon" width={38} />
          </li>
          <li className="mr-0 p-2 ">
            <button
              onClick={() => {
                logout();
              }}
            >
              <Image src={exit} alt="icon" width={38} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

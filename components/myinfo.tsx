import UserNav from "./usernav";
import phone from "@/public/assets/MyInfo/phone-icon.svg";
import email from "@/public/assets/MyInfo/email-icon.svg";
import ln from "@/public/assets/MyInfo/ln-icon.svg";
import facebook from "@/public/assets/MyInfo/facebook-icon.svg";
import twit from "@/public/assets/MyInfo/twit-icon.svg";
import hash from "@/public/assets/MyInfo/hash-icon.svg";
import time from "@/public/assets/MyInfo/time-icon.svg";
import group from "@/public/assets/MyInfo/group-icon.svg";
import eur from "@/public/assets/MyInfo/eur-icon.svg";
import geo from "@/public/assets/MyInfo/geo-icon.svg";
import user from "@/public/assets/MyInfo/user-icon.svg";
import downarrow from "@/public/assets/MyInfo/down-arrow-icon.svg";
import comp from "@/public/assets/MyInfo/comp-icon.svg";
import annual from "@/public/assets/MyInfo/annual-icon.svg";
import sick from "@/public/assets/MyInfo/sick-icon.svg";
import Image from "next/image";
export default function MyInfo() {
  return (
    <div className="z-0">
      <div className="bg-slate-400 w-screen ml-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-6 ">
          <UserNav />
        </div>
      </div>
      <div className="px-28 max-w-screen-2xl mx-auto  columns-2 flex justify-start -mt-10">
        <div className="ml-4">
          <div className="w-56 bg-gray-100  flex-col rounded-lg p-6 mb-5 z-0">
            <div className="flex">
              <Image
                src={phone}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>07911 654321</p>
            </div>
            <div className="flex">
              <Image
                src={email}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>avd.yana@videorollnet</p>
            </div>
            <div className="flex">
              <Image
                src={ln}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>{" "}
              <Image
                src={facebook}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>{" "}
              <Image
                src={twit}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
            </div>
          </div>
          <div className="w-56 bg-gray-100  flex-col rounded-lg p-6 mb-5 z-0">
            <p>Hire Date</p>
            <p>Sep. 3,2020</p>
            <p>3y - 9m - 20d</p>
          </div>
          <div className="w-56 bg-gray-100  flex-col rounded-lg p-6 mb-5 z-0">
            <div className="flex">
              <Image
                src={hash}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>5</p>
            </div>
            <div className="flex">
              <Image
                src={time}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Full-Time</p>
            </div>
            <div className="flex">
              <Image
                src={group}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Operations</p>
            </div>
            <div className="flex">
              <Image
                src={eur}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Europe</p>
            </div>
            <div className="flex">
              <Image
                src={geo}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>London, UK</p>
            </div>
          </div>
          <div className="w-56 bg-gray-100  flex-col rounded-lg p-6 mb-5 z-0">
            <p>Direct Reports</p>
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>London, UK</p>
            </div>{" "}
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Shane</p>
            </div>{" "}
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Nathan</p>
            </div>{" "}
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p></p>
            </div>{" "}
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Philip</p>
            </div>{" "}
            <div className="flex">
              <Image
                src={group}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>4 More...</p>
            </div>
          </div>
          <div className="w-56 bg-gray-100  flex-col rounded-2xl p-6 mb-5 z-0">
            <p>Manager</p>
            <div className="flex">
              <Image
                src={user}
                alt="icon"
                width={46}
                height={46}
                className="mr-2"
              ></Image>
              <div className="flex-row">
                <p>Jennifer Caldwell</p>
                <p>VP of People</p>
              </div>
            </div>
            <p>Direct Reports</p>
            <div className="flex">
              <Image
                src={group}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Jake Huang</p>
            </div>
            <div className="flex">
              <Image
                src={group}
                alt="icon"
                width={16}
                height={16}
                className="mr-2"
              ></Image>
              <p>Warren Poole</p>
            </div>
          </div>
        </div>
        <div className="ml-6  bg-gray-100 border rounded-lg w-full px-4 py-14  z-10">
          <div className="text-sky-900">
            <Image
              src={comp}
              alt="icon"
              width={16}
              height={16}
              className="translate-y-5 -translate-x-3"
            />
            <h3 className="border-b-gray-400 border-b-2 ml-3">Time Off</h3>
            <div className="flex mx-20 justify-between mt-6">
              <div className="w-64 h-36 bg-gray-200 text-center p-6">
                <h4 className="font-inter text-xl font-semibold  ">Sick</h4>
                <Image
                  src={sick}
                  alt="icon"
                  width={30}
                  height={30}
                  className="translate-y-3 translate-x-12"
                />
                <h4 className="font-inter -mt-5 text-xl font-semibold  ">3</h4>
                <h5>Days Available</h5>
                <p>1 dey scheduled</p>
                <p className="mt-14">Sick Full-Time</p>
              </div>
              <div className="w-64 h-36 bg-gray-200 text-center p-6">
                <h4 className="font-inter  text-xl font-semibold  ">
                  Annual Leave
                </h4>
                <Image
                  src={annual}
                  alt="icon"
                  width={30}
                  height={30}
                  className="translate-y-3 translate-x-12"
                />
                <h4 className="font-inter -mt-5 text-xl font-semibold  ">
                  10.3
                </h4>
                <h5>Days Available</h5>
                <p> </p>
                <p className="mt-20">Holiday Full-Time</p>
              </div>
              <div className="w-64 h-36 bg-gray-200 text-center p-6">
                <h4 className="font-inter text-xl font-semibold  ">
                  Comp/in Lieu Time
                </h4>
                <Image
                  src={comp}
                  alt="icon"
                  width={30}
                  height={30}
                  className="translate-y-3 translate-x-12"
                />
                <h4 className="font-inter -mt-5 text-xl font-semibold  ">0</h4>
                <h5>Human Used(YTD)</h5>
                <p> </p>
                <p className="mt-20">Comp/in Lieu Time Flexible Policy</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <Image
              src={time}
              alt="icon"
              width={16}
              height={16}
              className="translate-y-5 -translate-x-3"
            />
            <p className="border-b-gray-400 border-b-2 text-sky-900 translate-x-2">
              Upcoming Time Off
            </p>
            <Image
              src={sick}
              alt="icon"
              width={16}
              height={16}
              className="translate-y-5 -translate-x-3"
            />
            <p className="ml-3  text-sky-900">Jan 27</p>
            <p className="border-b-gray-400 border-b-2 ">1 dey of Sick</p>
          </div>
          <div className="mt-5">
            <Image
              src={sick}
              alt="icon"
              width={16}
              height={16}
              className="translate-y-5 -translate-x-3"
            />
            <p className="ml-3 text-sky-900">Jul 4</p>
            <p className="border-b-gray-400 border-b-2 ">Independence Day</p>
          </div>
          <div className="flex-col mb-5">
            <Image
              src={time}
              alt="icon"
              width={16}
              height={16}
              className="translate-y-5 -translate-x-3"
            />
            <p className="ml-3">History</p>
            <div className="flex ">
              <a className="flex rounded-xl border border-solid p-1 border-slate-600 font-inter w-64 text-sm mr-3">
                Sick
                <Image className="ml-2" src={downarrow} alt="icon" width={14} />
              </a>
              <a className="flex rounded-xl border border-solid p-1 border-slate-600 font-inter w-20 text-sm mr-3">
                All
                <Image className="ml-2" src={downarrow} alt="icon" width={14} />
              </a>
              <a className="ml-auto flex rounded-xl border border-solid p-1 border-slate-600 font-inter w24 text-sm ">
                Balance History
                <Image className="ml-2" src={downarrow} alt="icon" width={14} />
              </a>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="absolute min-w-[1020px]   ml-2 ">
              <h5 className="border-b-gray-400 border-b-2 ">Date</h5>
              <p className="border-b-gray-400 border-b-2 ">23/05/2024</p>
              <p className="border-b-gray-400 border-b-2 ">23/05/2024</p>
              <p className="border-b-gray-400 border-b-2 ">23/05/2024</p>
              <p className="border-b-gray-400 border-b-2 ">23/05/2024</p>
              <p className="border-b-gray-400 border-b-2 ">23/05/2024</p>
            </div>
            <div className="ml-16 ">
              <h5>Description</h5>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
              <p>Accrual for 23/05/2024 to 20/11/2024</p>
            </div>
            <div className="">
              <h5>Used Days (-)</h5>
              <p>-</p>
              <p>-6</p>
              <p>-</p>
              <p>-6</p>
              <p>-</p>
            </div>
            <div className="">
              <h5>Earned Days (+)</h5>
              <p>3.00</p>
              <p>-</p>
              <p>3.00</p>
              <p>-</p>
              <p>3.00</p>
            </div>
            <div className="">
              <h5>Balance</h5>
              <p>3.00</p>
              <p>3.00</p>
              <p>3.00</p>
              <p>3.00</p>
              <p>3.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

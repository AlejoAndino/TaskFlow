import { FaMedal } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex mb-4 bg-amber-100 p-4 uppercase rounded-full justify-center items-center text-amber-700 font-semibold border shadow-lg">
          <FaMedal className="mr-2" size={23} />
          NO 1 Task Managment
        </div>
        <h1 className="text-3xl text-center font-bold text-neutral mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 pb-4 w-fit font-bold rounded-md">
          work forward.
        </div>
      </div>
      <div className="text-center text-sm mt-4 mx-auto px-9 text-neutral-600">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6 px-8 py-6">
        <Link href={'/sign-up'}>Get TaskFlow for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;

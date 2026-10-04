"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="font-bold text-[30px]">৪০৪</p>
        <p>এই পাতাটি পাওয়া যায়নি।</p>
        <Link href={"/"} className="mt-5 text-red-800 text-3xl">
          হোমপেজে ফিরুন
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

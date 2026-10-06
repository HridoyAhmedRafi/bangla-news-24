"use client";

import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none text-red-800">
          404
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-red-700"></div>

        {/* Message */}
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          এই পাতাটি পাওয়া যায়নি
        </h2>

        <p className="mt-3 max-w-md mx-auto text-gray-500 text-base sm:text-lg">
          আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে অথবা বর্তমানে আর
          উপলব্ধ নেই।
        </p>

        {/* Back Home */}
        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-red-800 px-6 py-3 text-base font-bold text-white transition hover:bg-red-900"
        >
          হোমপেজে ফিরুন
        </Link>
      </div>
    </div>
  );
};

export default error;

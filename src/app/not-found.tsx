import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none text-red-800">
          404
        </h1>

        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-red-700"></div>

        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-3 max-w-md mx-auto text-gray-500 text-base sm:text-lg">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি এই মুহূর্তে পাওয়া যাচ্ছে না।
        </p>

        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-red-800 px-6 py-3 text-base font-bold text-white transition hover:bg-red-900"
        >
          হোমপেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

import { IMostRead } from "@/types/mostRead";
import Link from "next/link";

const MostRead = async () => {
  const resMostRead = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
  );
  const dataMostRead = await resMostRead.json();
  const mostReadsData = dataMostRead.data;
  return (
    <div>
      <div className="text-[16px] font-semibold space-y-3 border border-gray-200 rounded-2xl px-4 py-4 ">
        <h1 className="text-[20px] font-semibold">সর্বাধিক পঠিত</h1>
        {mostReadsData.map((mostReadData: IMostRead, indx: number) => (
          <Link
            className="block"
            href={`/news/${mostReadData.id}`}
            key={mostReadData.id}
          >
            <span className="text-red-700 text-[20px] mr-2"> {indx + 1}.</span>
            {mostReadData.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;

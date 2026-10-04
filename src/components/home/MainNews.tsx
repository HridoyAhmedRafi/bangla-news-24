import { ImainNews } from "@/types/mainNews";
import Image from "next/image";
import Link from "next/link";

const MainNews = ({ mainNews }: { mainNews: ImainNews[] }) => {
  const [firstNews, ...othersNews] = mainNews;

  return (
    <div className=" p-4 flex-col md:flex md:flex-row justify-center  gap-0 md:gap-4 ">
      <Link href={`/news/${firstNews.id}`}>
        <div className="card bg-base-100 w-full md:w-96 mb-10 md:mb-0 shadow-sm ">
          <figure>
            <Image
              width={500}
              height={500}
              className="w-full h-full"
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
            />
          </figure>
          <div className="card-body px-0 md:px-4">
            <h2 className="card-title text-red-800 text-[14px]">
              {firstNews.category}
            </h2>
            <h1 className="font-bold text-[19px]">{firstNews.title}</h1>
            <h1>
              {firstNews.description?.split(" ").slice(0, 20).join(" ")}...
            </h1>
            <span className="text-gray-400 text-[13px]">
              {new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
                dateStyle: "long",
                timeStyle: "short",
              })}
            </span>
          </div>
        </div>
      </Link>

      {/* others news */}
      <div className="grid gap-2">
        {othersNews.slice(0, 4).map((otherNews) => (
          <Link key={otherNews.id} href={`/news/${otherNews.id}`}>
            <div className="card  border border-gray-200 px-4 py-6 hover:bg-gray-50">
              <div className="text-red-700">{otherNews.category}</div>

              <div className="font-semibold">{otherNews.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

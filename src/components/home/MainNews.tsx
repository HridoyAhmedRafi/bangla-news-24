import { ImainNews } from "@/types/mainNews";
import Image from "next/image";

const MainNews = ({ mainNews }: { mainNews: ImainNews[] }) => {
  const [firstNews, ...othersNews] = mainNews;

  return (
    <div className=" flex  justify-center gap-4">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <Image
            width={500}
            height={500}
            className="w-full h-full"
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body px-4">
          <h2 className="card-title text-red-800 text-[14px]">
            {firstNews.category}
          </h2>
          <h1 className="font-bold text-[19px]">{firstNews.title}</h1>
          <h1>{firstNews.description?.split(" ").slice(0, 20).join(" ")}...</h1>
          <span className="text-gray-400 text-[13px]">
            {new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
        </div>
      </div>

      {/* others news */}
      <div className="grid gap-2">
        {othersNews.slice(0, 4).map((otherNews) => (
          <div
            key={otherNews.id}
            className="card border border-gray-200 px-4 py-6 hover:bg-gray-50"
          >
            <div className="text-red-700 ">{otherNews.category}</div>
            <div className="font-semibold">{otherNews.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

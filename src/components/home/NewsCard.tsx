import { ImainNews } from "@/types/mainNews";
import Image from "next/image";

const NewsCard = ({ News }: { News: ImainNews }) => {
  return (
    <div>
      <div className="card bg-base-100 h-full w-full shadow-sm ">
        <figure>
          <Image
            width={500}
            height={500}
            className="w-full h-full"
            src={News.imageUrl}
            alt={News.imageAlt}
          />
        </figure>
        <div className="card-body px-4">
          <h2 className="card-title text-red-800 text-[14px]">
            {News.category}
          </h2>
          <h1 className="font-bold text-[16px]">{News.title}</h1>
          <h1>{News.description?.split(" ").slice(0, 11).join(" ")}...</h1>
          <span className="text-gray-400 text-[13px]">
            {new Date(News.firstPublished).toLocaleString("bn-BD", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

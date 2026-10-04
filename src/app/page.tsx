import MainNews from "@/components/home/MainNews";
import MostRead from "@/components/home/MostRead";
import NewsCard from "@/components/home/NewsCard";
import { ImainNews } from "@/types/mainNews";

interface IOtherSection {
  articles: ImainNews[];
  count: number;
  curationId: string;
  curationType: string;
  link: string | null;
  title: string;
}

export default async function Home() {
  //
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const othersSections = sections.slice(1);

  const filtedSections = othersSections.filter(
    (section: IOtherSection) => section.count !== 1 && section.count !== 6,
  );

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-3 max-w-7xl mx-auto md:gap-4 mt-8">
        <div className="col-span-2  ">
          <MainNews mainNews={mainNews}></MainNews>
          <div className="grid gap-4 mt-8">
            {filtedSections.map((otherSections: IOtherSection) => (
              <div className=" p-4 pb-2 " key={otherSections.curationId}>
                <h1 className="border-b-2 border-red-800 mb-3 font-semibold text-[18px]">
                  {otherSections.title}
                </h1>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                  {otherSections.articles.map((News) => (
                    <NewsCard key={News.id} News={News}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1  ">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}

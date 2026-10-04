import NewsCard from "@/components/home/NewsCard";
import { ICategoryNews } from "@/types/category-news-type";

interface ParamsProps {
  params: Promise<{
    categoryId: string;
  }>;
}
const CategoryNewsPage = async ({ params }: ParamsProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: ICategoryNews[] = data.data;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-[25px] font-bold border-b-2 border-red-800 ">
        {data.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 ">
        {categoryNews.map((News) => (
          <NewsCard key={News.id} News={News}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsPage;

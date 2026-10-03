import Image from "next/image";

interface ParamsProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetailsPage = async ({ params }: ParamsProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const detailsData = data.data;
  console.log(detailsData);

  return (
    <div className="max-w-7xl mx-auto">
      <h1>{detailsData.title}</h1>
      <Image
        src={detailsData.imageUrl}
        alt="image"
        width={500}
        height={500}
      ></Image>
    </div>
  );
};

export default NewsDetailsPage;

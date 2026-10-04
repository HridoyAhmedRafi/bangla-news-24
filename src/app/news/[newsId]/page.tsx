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

  return (
    <div className=" p-4 min-h-screen mt-8 max-w-3xl mx-auto">
      {/* Headline */}
      <h1 className="text-3xl md:text-3xl font-bold leading-tight">
        {detailsData.title}
      </h1>

      {/* Description */}
      <p className="mt-4 text-[17px] leading-8 text-gray-700">
        {detailsData.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
      </p>

      {/* Author + Date + Word Count */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <span>
          {detailsData.byline
            ?.map((author: { name: string }) => author.name)
            .join(", ")}
        </span>

        <span>•</span>

        <span>
          {new Date(detailsData.firstPublished).toLocaleString("bn-BD", {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </span>
      </div>

      {/* Article Body */}
      <div className=" mt-8 ">
        {detailsData.body?.map(
          (
            body: {
              type: string;
              width: number;
              height: number;
              url: string;
              altText?: string;
              caption?: string;
              copyrightHolder?: string;
              text?: string;
            },
            index: number,
          ) => {
            if (body.type === "image") {
              return (
                <figure key={index} className="space-y-2">
                  <Image
                    width={body.width}
                    height={body.height}
                    src={body.url}
                    alt={body.altText || body.caption || ""}
                    className="w-full h-auto rounded-lg"
                  />

                  {body.caption && (
                    <figcaption className="text-sm text-gray-500">
                      {body.caption}
                      {body.copyrightHolder && ` (${body.copyrightHolder})`}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (body.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold leading-tight pt-4"
                >
                  {body.text}
                </h2>
              );
            }

            if (body.type === "text") {
              return (
                <p
                  key={index}
                  className="text-[17px] leading-8 text-gray-800 whitespace-pre-line"
                >
                  {body.text}
                </p>
              );
            }

            return null;
          },
        )}
      </div>

      {/* Tags */}
      <div className="mt-10 pt-6 border-t border-gray-300 flex flex-wrap gap-2">
        {detailsData.tags?.map((tag: string) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsDetailsPage;

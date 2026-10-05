import { IMarqueeLinks } from "@/types/marqueeLinks";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const marqueeDataList: IMarqueeLinks[] = data.data;

  return (
    <div className="bg-[#c10007] text-white sticky top-0 z-50 mt-5">
      <div className="max-w-7xl mx-auto  flex items-center  ">
        <div className=" py-2 px-4 bg-red-800">সর্বশেষ</div>
        <MarqueeText duration={14} direction="right" className="py-2">
          {marqueeDataList.map((marqueeData) => (
            <Link href={`/news/${marqueeData.id}`} key={marqueeData.id}>
              <span>{marqueeData.title}</span>
              <span className="mx-3">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;

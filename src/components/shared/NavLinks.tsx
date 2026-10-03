import { INavLinks } from "@/types/navLinks";
import Link from "next/link";

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const links: INavLinks[] = data.data;

  const filteredLinks = links.filter((link) => link.scrapable !== false);

  return (
    <div className="  px-4 max-w-7xl mx-auto flex items-center justify-center gap-4 ">
      <Link href={"/"}>হোম</Link>
      {filteredLinks.map((link, indx) => (
        <Link href={link.slug} key={indx}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

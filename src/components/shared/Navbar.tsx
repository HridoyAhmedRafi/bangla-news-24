import Image from "next/image";
import logo from "../../../public/logo.webp";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <div className="px-4 py-3 relative max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-10"
          />

          <div className="flex flex-col">
            <h1 className="text-red-700 text-[22px] font-bold leading-none">
              Bangla News 24
            </h1>

            <p className="text-[#525252c8] text-[12px]">{date}</p>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button className="btn btn-ghost bg-none border-none text-[#626057]">
            সাইন ইন
          </button>

          <button className="btn rounded  bg-red-700 text-white">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks></NavLinks>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import logo from "../../../public/logo.webp";
import NavLinks from "./NavLinks";
import Buttons from "../user-info/Buttons";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <div className="px-4 py-4 relative max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-10"
          />

          <div className="hidden md:flex flex-col">
            <h1 className="text-red-700 text-[22px] font-bold leading-none">
              Bangla News 24
            </h1>

            <p className="text-[#525252c8] text-[12px]">{date}</p>
          </div>
        </div>

        <Buttons />
      </div>

      <NavLinks></NavLinks>
    </div>
  );
};

export default Navbar;

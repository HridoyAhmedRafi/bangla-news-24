"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  console.log("user", user);

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
      {user ? (
        <div className="flex items-center gap-2">
          {/* <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img alt="Profile Picture" src={user?.image as string} />
            </div>  
          </div> */}
          <h1 className="btn text-red-800">{user.name}</h1>
          <button
            onClick={handleSignOut}
            className=" btn cursor-pointer  rounded  bg-red-700 text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/sign-in"}>
            <button className=" btn btn-ghost bg-none border-none text-[#626057]">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="btn rounded  bg-red-700 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;

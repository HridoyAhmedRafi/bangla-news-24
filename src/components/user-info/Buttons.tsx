"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

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
    <div>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1 absolute right-4 top-1/2 -translate-y-1/2">
        {user ? (
          <div className="flex items-center gap-2">
            <Link href="/profile">
              <h1 className="btn text-red-800">{user.name}</h1>
            </Link>

            <button
              onClick={handleSignOut}
              className="btn cursor-pointer rounded bg-red-700 text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Link href="/sign-in">
              <button className="btn btn-ghost bg-none border-gray-400 text-[#626057]">
                সাইন ইন
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="btn rounded bg-red-700 text-white">
                সাইন আপ
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2">
        {user ? (
          <>
            {/* Username - Center */}
            <div className="flex justify-center">
              <Link href="/profile">
                <span className="text-sm font-medium text-red-800 whitespace-nowrap">
                  {user.name}
                </span>
              </Link>
            </div>

            {/* Sign Out - Right */}
            <button
              onClick={handleSignOut}
              className="btn btn-sm absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded bg-red-700 text-white whitespace-nowrap"
            >
              Sign Out
            </button>
          </>
        ) : (
          /* Sign In + Sign Up - Right */
          <div className="flex items-center justify-end gap-1 pr-4">
            <Link href="/sign-in">
              <button className="btn btn-sm btn-ghost border-gray-400 text-[#626057]">
                সাইন ইন
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="btn btn-sm rounded bg-red-700 text-white">
                সাইন আপ
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buttons;

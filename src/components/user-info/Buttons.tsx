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
    <div className="absolute right-4 top-1/2 -translate-y-1/2 md:right-0">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
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
          <div className="flex items-center">
            <Link href="/sign-in">
              <button className="btn btn-ghost bg-none border-none text-[#626057]">
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
      <div className="md:hidden">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn cursor-pointer rounded bg-red-700 text-white"
          >
            Sign Out
          </button>
        ) : (
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div
              tabIndex={0}
              className="dropdown-content mt-3 z-50 flex items-center gap-1 rounded-box bg-base-100 p-2 shadow-lg"
            >
              <Link href="/sign-in">
                <button className="btn btn-ghost bg-none border-none text-[#626057]">
                  সাইন ইন
                </button>
              </Link>

              <Link href="/sign-up">
                <button className="btn rounded bg-red-700 text-white">
                  সাইন আপ
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buttons;

"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const userInitial = user?.name?.charAt(0)?.toUpperCase() || "U";

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  const handleEditProfile = () => {
    setName(user?.name || "");
    setIsEditOpen(true);
  };

  const handleUpdateName = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    setIsUpdating(true);

    const { error } = await updateUser({
      name: name.trim(),
    });

    setIsUpdating(false);

    if (error) {
      toast.error(error.message as string);
      return;
    }

    setIsEditOpen(false);
  };

  return (
    <div className="mt-10 min-h-screen max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-purple-600 text-3xl font-bold text-white">
            {userInitial}
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {user?.name}
          </h1>

          <p className="mt-1 text-gray-500">{user?.email}</p>
        </div>

        {/* Profile Information */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Profile Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your account information.
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Name */}
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>

                <p className="mt-1 font-medium text-gray-900">{user?.name}</p>
              </div>

              <button
                onClick={handleEditProfile}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Edit
              </button>
            </div>

            {/* Email */}
            <div className="px-6 py-5">
              <p className="text-sm text-gray-500">Email Address</p>

              <div className="mt-1 flex items-center gap-2">
                <p className="font-medium text-gray-900">{user?.email}</p>
              </div>
            </div>

            {/* Account Status */}
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm text-gray-500">Account Status</p>

                <p className="mt-1 font-medium text-gray-900">
                  Your account is active
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleEditProfile}
            className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700"
          >
            Edit Profile
          </button>

          <button
            onClick={handleSignOut}
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign Out
          </button>

          <button className="rounded-lg border border-red-300 px-5 py-3 text-sm font-medium text-red-600 hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Edit Profile
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your name below.
              </p>
            </div>

            <form onSubmit={handleUpdateName}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isUpdating}
                  className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Sign In successful");
      redirect("/");
    }
    if (error) {
      toast.error(error.message as string);
    }
  };

  const handleSignInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };
  const handleSignInWithGithub = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 ">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-700">সাইন ইন</h1>
        </div>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl shadow-xl p-6">
            <label className="label font-medium mt-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:input-primary"
              placeholder="আপনার ইমেইল লিখুন"
            />

            <label className="label font-medium mt-2">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full focus:input-primary"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
            />

            <button
              type="submit"
              className="btn bg-red-700 text-white w-full mt-5"
            >
              সাইন ইন করুন
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-base-content/20"></div>

              <span className="text-sm text-base-content/60">OR</span>

              <div className="h-px flex-1 bg-base-content/20"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around gap-3">
              <button
                type="button"
                onClick={handleSignInWithGoogle}
                className="btn w-full sm:w-50 bg-blue-500 text-white"
              >
                Sign In With Google
              </button>

              <button
                type="button"
                onClick={handleSignInWithGithub}
                className="btn w-full sm:w-50 bg-[#202124] text-white"
              >
                Sign Up With GitHub
              </button>
            </div>

            <p className="text-center text-sm text-base-content/60 mt-5">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/sign-up"
                className="text-red-700 font-medium hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

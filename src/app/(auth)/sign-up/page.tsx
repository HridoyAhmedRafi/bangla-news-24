"use client";
import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const image = formData.get("profilePicture");
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Sign Up successful");
      redirect("/");
    }
    if (error) {
      toast.error(error.message as string);
    }
  };

  const handleSignUpWithGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  const handleSignUpWithGithub = async () => {
    await signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 ">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-700">সাইন আপ</h1>
        </div>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-base-100 border border-base-300 rounded-2xl shadow-xl p-6">
            <label className="label font-medium">নাম</label>
            <input
              type="text"
              name="name"
              className=" input input-bordered w-full focus:input-primary"
              placeholder="আপনার নাম লিখুন"
            />

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

            {/* <label className="label font-medium mt-2">প্রোফাইল ছবি</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            /> */}

            <button
              type="submit"
              className="btn bg-red-700 text-white w-full mt-5"
            >
              সাইন আপ করুন
            </button>
            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-base-content/20"></div>

              <span className="text-sm text-base-content/60">OR</span>

              <div className="h-px flex-1 bg-base-content/20"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around gap-3">
              <button
                type="button"
                onClick={handleSignUpWithGoogle}
                className="btn w-full sm:w-50 bg-blue-500 text-white"
              >
                Sign Up With Google
              </button>

              <button
                type="button"
                onClick={handleSignUpWithGithub}
                className="btn w-full sm:w-50 bg-[#202124] text-white"
              >
                Sign Up With GitHub
              </button>
            </div>

            <p className="text-center text-sm text-base-content/60 mt-5">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/sign-in"
                className="text-red-700 font-medium hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

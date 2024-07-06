"use client";

import Link from "next/link";

import { InferGetServerSidePropsType, NextPage } from "next";

const Login: NextPage = ({ NEXTAUTH_URL }: InferGetServerSidePropsType<any>) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <Link
          className="text-lg font-bold"
          href="/"
        ></Link>
        <div className="mb-2">
          <label className="block text-sm font-semibold leading-7"></label>
          <select className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"></select>
        </div>
        <div className="pt-2">
          <form className="space-y-2">
            <div>
              <label className="block text-xs font-medium leading-7"></label>
              <input
                type="text"
                required
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium leading-7"></label>
              <input
                type="password"
                required
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
            </div>
            <div className="flex justify-between text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1">
              <Link
                href="/register"
                className="rounded-xl px-2 py-1.5 ring-offset-1 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></Link>
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              ></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

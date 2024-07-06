"use client";

import { useEffect, useState } from "react";

import { InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useRegisterMutation } from "@/store/slices/api/authSlice";
import { useResponseToastHandler } from "@/hooks/useResponseToastHandler";
import { APIActionResponse, User } from "@/types";
import { withCommonGetServerSideProps } from "@/utils/withCommonGetServerSideProps";
import { useTranslation } from "next-i18next";
import { setCookie } from "cookies-next";
// export const getServerSideProps = withCommonGetServerSideProps(["auth", "common"]);
const Register: NextPage = ({ NEXTAUTH_URL }: InferGetServerSidePropsType<any>) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const redirectUrl = (router.query.callbackUrl as string) || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Record<"username" | "email" | "firstName" | "lastName" | "password" | "global", string>
  >({
    username: "",
    password: "",
    global: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [registerMutation] = useRegisterMutation();
  const { status } = useSession();
  const { displayErrors } = useResponseToastHandler();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.replace(redirectUrl.replace(NEXTAUTH_URL, ""));
    }
  }, [NEXTAUTH_URL, redirectUrl, status]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Email is invalid" }));
      return;
    }
    if (!firstName) {
      setErrors((prev) => ({ ...prev, firstName: "First Name is required" }));
      return;
    }
    if (!lastName) {
      setErrors((prev) => ({ ...prev, lastName: "Last Name is required" }));
      return;
    }
    if (!username) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      return;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return;
    }
    setIsSubmitting(true);
    const registerResponse = (await registerMutation({
      firstName,
      lastName,
      username,
      password,
      email
    })) as APIActionResponse<User>;

    if (displayErrors(registerResponse)) {
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username: "emilys",
      password: "emilyspass"
    });

    if (res && !res.ok) {
      toast.error(res.error);
    } else {
      toast.success("User registered successfully");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
          <Link
            className="text-lg font-bold"
            href="/"
          >
            {t("common:home")}
          </Link>
          <div className="mb-2">
            <label className="block text-sm font-semibold leading-7">{t("common:select_language")}</label>
            <select
              value={i18n.language}
              onChange={async (e) => {
                const locale = e.target.value;
                await i18n.changeLanguage(locale);

                document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
                document.documentElement.setAttribute("lang", i18n.language);

                setCookie("NEXT_LOCALE", i18n.language, {
                  path: "/",
                  sameSite: "strict",
                  secure: process.env.NODE_ENV === "production"
                });
              }}
              className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
            >
              <option value="en">{t("common:english")}</option>
              <option value="ar">{t("common:arabic")}</option>
            </select>
          </div>
          <h1 className="font-semibold tracking-normal">{t("auth:register_title")}</h1>
          <p className="text-xs/4 font-light text-slate-500">{t("auth:register_description")}</p>
          <div className="pt-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-2"
            >
              <div>
                <label className="block text-xs font-medium leading-7">{t("auth:first_name")}</label>
                <input
                  placeholder={t("auth:first_name") as string}
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
                />
                {errors.firstName && <p className="text-sm font-bold italic text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium leading-7">{t("auth:last_name")}</label>
                <input
                  placeholder={t("auth:last_name") as string}
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
                />
                {errors.lastName && <p className="text-sm font-bold italic text-red-500">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium leading-7">{t("auth:email")}</label>
                <input
                  placeholder={t("auth:email") as string}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
                />
                {errors.email && <p className="text-sm font-bold italic text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium leading-7">{t("auth:username")}</label>
                <input
                  placeholder={t("auth:username") as string}
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
                />
                {errors.username && <p className="text-sm font-bold italic text-red-500">{errors.username}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium leading-7">{t("auth:password")}</label>
                <input
                  placeholder={t("auth:password") as string}
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
                />
                {errors.password && <p className="text-sm font-bold italic text-red-500">{errors.password}</p>}
              </div>
              {errors.global && <p className="text-sm font-bold italic text-red-500">{errors.global}</p>}
              <div className="flex justify-between text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1">
                <Link
                  href="/login"
                  className="rounded-xl px-2 py-1.5 ring-offset-1 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  {t("auth:login")}
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
                >
                  {isSubmitting ? t("common:submitting") : t("auth:register")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

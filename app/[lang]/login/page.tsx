"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { login } from "@/handlers";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type NavigationType = {
  login_description: string;
  auth: string;
  addlogin_description: string;
  entercomment: string;
  login_title: string;
  chooseLang: string;
  username: string;
  password: string;
  dontHave: string;
  register_title: string;
  invalidUser: string;
  validation: string;
  login: string;
};

const Login = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [navigation, setNavigation] = useState<NavigationType>({
    login_description: "",
    auth: "",
    addlogin_description: "",
    entercomment: "",
    login_title: "",
    chooseLang: "",
    username: "",
    password: "",
    dontHave: "",
    register_title: "",
    invalidUser: "",
    validation: "",
    login: ""
  });

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setNavigation(dictionary.auth as unknown as NavigationType);
    };
    fetchDictionary();
  }, [lang]);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { fetchUser } = useUser();

  const updateUser = async () => {
    await fetchUser();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]{3,20}$/, navigation.invalidUser)
        .required(navigation.validation),
      password: Yup.string().required(navigation.validation)
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await login("emilys", "emilyspass", setIsLoading, setApiError);
        await updateUser();
        router.push(`/${lang}/comments`);
      } catch (error) {
        setApiError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <div className="flex flex-col items-center justify-center dark:bg-darkGray">
      <div className="px-15 my-28 max-w-sm rounded-xl bg-white p-5 shadow-xl dark:bg-black md:w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl font-semibold ltr:ml-3 rtl:mr-3">{navigation.login_title}</h2>
          <h1 className="text-center text-gray-400">{navigation.login_description}</h1>

          <div className="mt-5 flex w-full flex-col items-center gap-5">
            <div className="flex w-full flex-col gap-3">
              <div>
                <Input
                  className="rounded-lg"
                  label={navigation.username}
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username.trim()}
                />
                {formik.touched.username && formik.errors.username && (
                  <span className="ms-1 text-sm text-red-500">{formik.errors.username}</span>
                )}
              </div>
              <div>
                <Input
                  className="rounded-lg"
                  label={navigation.password}
                  name="password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password.trim()}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="ms-1 text-sm text-red-500">{formik.errors.password}</span>
                )}
              </div>
            </div>
            <div className="text-gray-400">
              <p className="text-small">
                {navigation.dontHave}{" "}
                <span
                  onClick={() => router.push(`/${lang}/register`)}
                  className="cursor-pointer font-semibold text-black transition-all duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
                >
                  {navigation.register_title}
                </span>
              </p>
            </div>
            <Button
              className="w-full rounded-lg bg-black font-semibold text-white dark:bg-white dark:text-black"
              type="submit"
              isLoading={isLoading}
            >
              {navigation.login}
            </Button>
            {apiError && (
              <div className="flex w-full justify-center">
                <span className="text-red-500">{apiError}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

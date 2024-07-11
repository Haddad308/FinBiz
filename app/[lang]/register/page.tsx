/* eslint-disable react-hooks/exhaustive-deps */
"use client";

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
  username: string;
  entercomment: string;
  login_title: string;
  register_title: string;
  register_description: string;
  chooseLang: string;
  first_name: string;
  last_name: string;
  password: string;
  register: string;
  invalidUser: string;
  validation: string;
};

const Register = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [navigation, setNavigation] = useState<NavigationType>({
    login_description: "",
    auth: "",
    username: "",
    entercomment: "",
    login_title: "",
    register_title: "",
    register_description: "",
    chooseLang: "",
    first_name: "",
    last_name: "",
    password: "",
    register: "",
    invalidUser: "",
    validation: ""
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
      password: "",
      firstName: "",
      lastName: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]{3,20}$/, navigation.invalidUser)
        .required(navigation.validation),
      password: Yup.string().required(navigation.validation),
      firstName: Yup.string().required(navigation.validation),
      lastName: Yup.string().required(navigation.validation)
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        login("emilys", "emilyspass", setIsLoading, setApiError);
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
      <div className="my-28 w-3/4 max-w-sm rounded-xl bg-white p-5 shadow-xl dark:bg-black md:w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-semibold md:text-2xl">{navigation.register_title}</h2>
          <h1 className="text-center text-gray-400">{navigation.register_description}</h1>

          <div className="mt-5 flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col gap-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    className="rounded-lg"
                    label={navigation.first_name}
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <span className="ms-1 text-sm text-red-500">{formik.errors.firstName}</span>
                  )}
                </div>
                <div>
                  <Input
                    className="rounded-lg"
                    label={navigation.last_name}
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span className="ms-1 w-1/2 text-sm text-red-500">{formik.errors.lastName}</span>
                  )}
                </div>
              </div>
              <div>
                <Input
                  className="rounded-lg"
                  label={navigation.username}
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
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
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="ms-1 text-sm text-red-500">{formik.errors.password}</span>
                )}
              </div>
            </div>
            <Button
              className="w-full rounded-lg bg-black font-semibold text-white dark:bg-white dark:text-black"
              type="submit"
              isLoading={isLoading}
            >
              {navigation.register}
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

export default Register;

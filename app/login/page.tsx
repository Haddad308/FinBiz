"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { login } from "@/handlers";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { fetchUser } = useUser();

  const updateUser = async () => {
    console.log("Updating user ?? ");
    await fetchUser();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]{3,20}$/, "Username must be 3-20 characters long and contain only letters and numbers")
        .required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      login("emilys", "emilyspass", setIsLoading, setApiError).then(() => {
        updateUser().then(() => {
          router.push("/comments");
        });
      });
    }
  });

  return (
    <div className="flex  flex-col items-center justify-center dark:bg-darkGray ">
      <div className=" px-15 my-28 max-w-sm rounded-xl bg-white p-5 shadow-xl dark:bg-black md:w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-1"></div>
          <h2 className="text-2xl font-semibold ltr:ml-3 rtl:mr-3">Welcome back!</h2>
          <h1 className="text-gray-400">Sign in to your msaaq account</h1>

          <div className="mt-5 flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col gap-3">
              <Select
                label="Select Language"
                id="travelOfficeId"
                placeholder="Select an agency"
              >
                <SelectItem
                  key={1}
                  value={5}
                >
                  vals
                </SelectItem>
              </Select>
              <div>
                <Input
                  className="rounded-lg"
                  label="username"
                  name="username"
                  placeholder="Enter your username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username.trim()}
                />
                {formik.touched.username && !!formik.errors.username && (
                  <span className="ms-1 text-sm text-red-500 ">{formik.errors.username}</span>
                )}
              </div>
              <div>
                <Input
                  className="rounded-lg"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none "
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
                {formik.touched.password && !!formik.errors.password && (
                  <span className="ms-1 text-sm text-red-500 ">{formik.errors.password}</span>
                )}
              </div>
            </div>
            <Button
              className="w-full rounded-lg bg-black font-semibold text-white dark:bg-white dark:text-black"
              type="submit"
              isLoading={isLoading}
            >
              Sign In
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

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

const Register = () => {
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
      password: "",
      firstName: "",
      lastName: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z0-9]{3,20}$/, "Username must be 3-20 characters")
        .required("Required"),
      password: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required")
    }),
    onSubmit: () => {
      login("emilys", "emilyspass", setIsLoading, setApiError).then(() => {
        updateUser().then(() => {
          router.push("/comments");
        });
      });
    }
  });

  return (
    <div className="flex  flex-col items-center justify-center dark:bg-darkGray ">
      <div className=" my-28 w-3/4 max-w-sm rounded-xl bg-white  p-5 shadow-xl dark:bg-black md:w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-semibold md:text-2xl">Create a new account</h2>
          <h1 className="text-gray-400">Join Msaaq Now!</h1>

          <div className="mt-5 flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col gap-3">
              <Select
                label="Select Language"
                id="travelOfficeId"
              >
                <SelectItem
                  key={1}
                  value={5}
                >
                  vals
                </SelectItem>
              </Select>
              <div
                className="grid grid-cols-2 gap-4
              "
              >
                <div>
                  <Input
                    className="rounded-lg"
                    label="firstName"
                    name="firstName"
                    // placeholder="Enter your firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName.trim()}
                  />
                  {formik.touched.firstName && !!formik.errors.firstName && (
                    <span className="ms-1 text-sm text-red-500 ">{formik.errors.firstName}</span>
                  )}
                </div>
                <div>
                  <Input
                    className="rounded-lg"
                    label="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName.trim()}
                  />
                  {formik.touched.lastName && !!formik.errors.lastName && (
                    <span className="ms-1 w-1/2 text-sm text-red-500">{formik.errors.lastName}</span>
                  )}
                </div>
              </div>
              <div>
                <Input
                  className="rounded-lg"
                  label="username"
                  name="username"
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
              Sign up
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

"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setApiError("Wrong Email or Password."); // Example API error
      }, 2000);
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
                // value={formHandler.values.travelOfficeId}
                // onClick={handleUpdateAgencies}
                // onChange={formHandler.handleChange("travelOfficeId")}
                // isInvalid={formHandler.errors.travelOfficeId && formHandler.touched.travelOfficeId}
                // errorMessage={formHandler.errors.travelOfficeId}
              >
                <SelectItem
                  key={1}
                  value={5}
                >
                  vals
                </SelectItem>
              </Select>
              <Input
                className="rounded-lg"
                label="Email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email.trim()}
                isInvalid={formik.touched.email && !!formik.errors.email}
                errorMessage={formik.touched.email && formik.errors.email}
              />
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
                isInvalid={formik.touched.password && !!formik.errors.password}
                errorMessage={formik.touched.password && formik.errors.password}
              />
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

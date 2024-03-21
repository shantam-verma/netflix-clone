"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import ErrorMessage from "@/app/components/ErrorMessage";
import { LoginFormSchema, SignUpFormSchema } from "@/app/utils/schema";
import { signInAuth, signUpAuth } from "@/app/api/authRoutes";
import Cookies from "js-cookie";
import { ACCESS_KEY } from "@/app/utils/constant";
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleLoginAuth = (values) => {
    signInAuth(values.email, values.password)
      .then((res) => {
        Cookies.set(ACCESS_KEY, res?.user?.accessToken);
        route.push("/");
      })
      .catch((error) => {
      });
  };

  const handleSignUpAuth = (values) => {
    signUpAuth(values.email, values.password)
      .then(async (res) => {
        await Cookies.set(ACCESS_KEY, res?.user?.accessToken);
        route.push("/");
      })
      .catch((error) => {
      });
  };
  return (
    <div className="bg-opacity">
      <div className="content">
        <main className="flex justify-center text-white pt-[20vh]">
          <div className="w-screen sm:w-[60%] md:w-1/2 lg:w-[30%] bg-black py-5 sm:pt-10 px-5 md:px-10 lg:px-16 lg: bg-opacity-70 rounded-md">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl mb-5 font-bold">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {isSignInForm ? (
                <Formik
                  key="signInForm"
                  initialValues={{ email: "", password: "" }}
                  validationSchema={LoginFormSchema}
                  onSubmit={async (values, actions) => {
                    await handleLoginAuth(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`p-3 my-4 w-full bg-[#161616b3] bg-opacity-50 border rounded-md ${
                          errors.email && touched.email && "border-red-800"
                        } ${errors.email && touched.email && "border-2"}`}
                      />
                      <ErrorMessage
                        errors={errors.email}
                        touched={touched.email}
                      />
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`p-3 my-4 w-full bg-[#161616b3] bg-opacity-50 border rounded-md ${
                          errors.password &&
                          touched.password &&
                          "border-red-800"
                        } ${errors.password && touched.password && "border-2"}`}
                      />
                      <ErrorMessage
                        errors={errors.password}
                        touched={touched.password}
                      />
                      <button
                        type="submit"
                        className="p-3 my-6 bg-red-700 w-full rounded-md"
                      >
                        Sign In
                      </button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <Formik
                  key="signUpForm"
                  initialValues={{ name: "", email: "", password: "" }}
                  validationSchema={SignUpFormSchema}
                  onSubmit={async (values, actions) => {
                    await handleSignUpAuth(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`p-3 my-4 w-full bg-[#161616b3] bg-opacity-50 border rounded-md ${
                          errors.name && touched.name && "border-red-800"
                        } ${errors.name && touched.name && "border-2"}`}
                      />
                      <ErrorMessage
                        errors={errors.name}
                        touched={touched.name}
                      />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`p-3 my-4 w-full bg-[#161616b3] bg-opacity-50 border rounded-md ${
                          errors.email && touched.email && "border-red-800"
                        } ${errors.email && touched.email && "border-2"}`}
                      />
                      <ErrorMessage
                        errors={errors.email}
                        touched={touched.email}
                      />
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`p-3 my-4 w-full bg-[#161616b3] bg-opacity-50 border rounded-md ${
                          errors.password &&
                          touched.password &&
                          "border-red-800"
                        } ${errors.password && touched.password && "border-2"}`}
                      />
                      <ErrorMessage
                        errors={errors.password}
                        touched={touched.password}
                      />
                      <button
                        type="submit"
                        className="p-3 my-6 bg-red-700 w-full rounded-md"
                      >
                        Sign Up
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
              <p className="font-extralight">
                {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
                <span
                  className="font-bold hover:underline my-4 cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up Now" : "Sign In Now"}
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

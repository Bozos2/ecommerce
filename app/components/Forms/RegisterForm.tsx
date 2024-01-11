"use client";

import Image from "next/image";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import RegisterIllustration from "../../assets/register-illustration.png";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { loginUser } from "@/app/helpers/helper";

import { FormDataSchema } from "@/app/lib/schema";

export type Inputs = z.infer<typeof FormDataSchema>;

const RegisterForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const signupHandle: SubmitHandler<Inputs> = async (data) => {
    reset();

    const formData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      gender: data.gender,
    };

    try {
      const apiResponse = await axios.post("api/auth/signup", formData);
      if (apiResponse?.data.success) {
        await loginUser({
          email: data.email,
          password: data.password,
        });
        router.push("/");
      }
    } catch (err) {
      const errors = err as AxiosError;
      console.error("Error during POST request:", err);
      if (errors.response?.status === 409) {
        setError("User already exist");
      } else {
        setError(errors.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-200">
      <div className="flex flex-row  justify-center mx-3 sm:mx-36 lg:mx-0 bg-white shadow-[0_10px_20px_rgba(135,_206,_235,_0.9)] rounded-xl max-w-[1100px] w-full  font-nunito">
        <div className="flex flex-col gap-6 px-14 w-full sm:px-4 sm:p-8 sm:w-4/6 lg:pl-12 lg:w-2/5">
          <div className="pt-6 sm:pt-2">
            <div className="flex flex-row justify-between">
              <h1 className="pt-2 font-bold lg:pt-4 lg:font-extrabold text-4xl lg:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-sky800 to-sky300">
                Welcome{" "}
              </h1>

              <Link
                href="/login"
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky800 to-sky300 font-bold text-base pt-6 lg:pt-10 ml-8"
              >
                Log in
              </Link>
            </div>
            <h4 className="pt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky800 to-sky300">
              Register new account
            </h4>
          </div>
          <form method="POST" onSubmit={handleSubmit(signupHandle)}>
            <label
              className="block font-medium text-base text-zinc-500"
              htmlFor="fullname"
            >
              Full Name{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full  border-zinc-300 focus:outline-none focus:shadow-outline focus:border focus:border-sky-500"
              type="text"
              id="fullname"
              title="fullname"
              {...register("fullName")}
              placeholder="Enter your Full Name..."
              required
            />
            {errors.fullName?.message && (
              <p className="text-sm text-red-400">{errors.fullName.message}</p>
            )}
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="email1"
            >
              Email{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline focus:border focus:border-sky-500"
              type="text"
              id="email1"
              title="email"
              {...register("email")}
              placeholder="example@gmail.com"
              required
            />
            {errors.email?.message && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="email"
            >
              Password{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline focus:border focus:border-sky-500"
              type="password"
              id="password"
              title="password"
              {...register("password")}
              required
              placeholder="Your password..."
            />
            {errors.password?.message && (
              <p className="text-sm text-red-400">{errors.password.message}</p>
            )}
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline focus:border focus:border-sky-500"
              id="gender"
              title="gender"
              {...register("gender")}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender?.message && (
              <p className="text-sm text-red-400">{errors.gender.message}</p>
            )}

            <div className="flex mt-6">
              <div className=" text-white tracking-wider text-center font-semibold py-2 px-8 mb-6 sm:mb-0 rounded-lg cursor-pointer focus:outline-none focus:shadow-outline   bg-gradient-to-r from-sky800 to-sky300 transition ease-in-out  duration-200 hover:scale-105">
                <button
                  typeof="submit"
                  className="cursor-pointer"
                  type="submit"
                >
                  Submit Form
                </button>
              </div>
            </div>
            {error && <div className="text-red-400 p-1">{error}</div>}
          </form>
        </div>
        <div className="hidden lg:flex items-center">
          <Image
            alt="Illustration picture"
            src={RegisterIllustration}
            width={740}
            height={980}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

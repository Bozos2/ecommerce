"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import RegisterIllustration from "../../assets/register-illustration.png";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { loginUser } from "@/app/helpers/helper";
import { ErrorsArray } from "@/app/types/error";

const Register = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
  });
  const [valError, setValError] = useState<ErrorsArray[]>([]);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];

    if (data.fullName?.length < 4) {
      err.push({ fullName: "Full name must be atleast 4 characters long" });
    } else if (data.fullName?.length > 30) {
      err.push({ fullName: "Full name should be less than 30 characters" });
    } else if (data.password?.length < 6) {
      err.push({ password: "Password should be atleast 6 characters long" });
    }

    setValError(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const signupHandle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      try {
        const apiResponse = await axios.post(
          "http://localhost:3000/api/auth/signup",
          data
        );
        if (apiResponse?.data.success) {
          const loginResponse = await loginUser({
            email: data.email,
            password: data.password,
          });
          if (loginResponse && !loginResponse.ok) {
            setError(loginResponse.error || "");
          } else {
            router.push("/");
          }
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.error;
          setError(errorMessage);
        }
      }
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row  justify-center mx-3 sm:mx-36 lg:mx-0 shadow-[0_10px_20px_rgba(135,_206,_235,_0.9)] rounded-xl max-w-[1100px] w-full h-[570px] font-nunito">
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
          <form method="POST" onSubmit={signupHandle}>
            <label
              className="block font-medium text-base text-zinc-500"
              htmlFor="fullname"
            >
              Full Name{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full  border-zinc-300 focus:outline-none focus:shadow-outline"
              type="text"
              name="fullName"
              id="fullname"
              title="fullname"
              value={data.fullName}
              onChange={handleInputChange}
              placeholder="Alan Ford"
              required
            />
            {valError && (
              <div className="text-red-400 pl-1">
                {valError.map((error) => error.fullName)}
              </div>
            )}
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="email1"
            >
              Email{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email1"
              title="email"
              value={data?.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              required
            />
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="email"
            >
              Password{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              title="password"
              value={data?.password}
              onChange={handleInputChange}
              required
              placeholder="Your password"
            />
            {valError && (
              <div className="text-red-400 pl-1">
                {valError.map((error) => error.password)}
              </div>
            )}
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              name="gender"
              id="gender"
              title="gender"
              value={data?.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <div className="flex mt-6">
              <div className="bg-gradient-to-r from-sky800 to-sky300 text-white text-center font-semibold py-2 px-8 rounded-lg cursor-pointer focus:outline-none focus:shadow-outline">
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

export default Register;

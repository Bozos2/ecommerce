"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useState, FormEvent } from "react";
import { loginUser } from "@/app/helpers/helper";

import LoginSVG from "@/app/assets/LoginSVGIllustration/LoginSVG";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const loginResponse = await loginUser({ email, password });

      console.log("error", loginResponse?.error);

      if (loginResponse && loginResponse.error) {
        setError(loginResponse.error || "");
      } else {
        router.push("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setError(errorMsg);
      }
    }
  };

  return (
    <div className=" w-full  font-nunito">
      <div className="flex flex-col xl:flex-row gap-12 mb-24 mt-6 xl:mt-0 xl:mb-0 xl:mx-4 2xl:mx-36  xl:gap-0 xl:justify-around items-center xl:h-screen">
        <div className="max-w-[640px]">
          <h1 className="hidden xl:block xl:text-6xl xl:font-extrabold xl:text-sky-600">
            HomeDecor
          </h1>
          <p className="text-2xl font-medium pt-4 text-center xl:text-left">
            Dear User! To complete your purchase, you need to log in or create a
            user account.
          </p>
        </div>
        <div className="flex flex-row max-w-[640px] xl:w-full h-[360px] xl:h-[410px] pr-8 pt-8 rounded-xl shadow-[0_10px_20px_rgba(135,_206,_235,_0.9)]">
          <div className="hidden xl:flex">
            <LoginSVG />
          </div>
          <div className="pl-8 xl:pl-0">
            <form onSubmit={handleLogin}>
              <h2 className="text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky800 to-sky300 ">
                Login
              </h2>
              <label
                className="block font-medium text-base mt-4 text-zinc-500"
                htmlFor="email2"
              >
                Email
              </label>
              <input
                className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full  border-zinc-300 focus:outline-none focus:shadow-outline"
                type="text"
                id="email2"
                title="email"
                placeholder="example@gmail.com"
                onChange={handleEmailChange}
              />
              <label
                className="block font-medium text-base text-zinc-500 mt-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                title="password"
                placeholder="Your password"
                onChange={handlePasswordChange}
              />
              <div className="bg-gradient-to-r from-sky800 to-sky300 text-white text-center font-semibold py-2 px-8 mt-6 rounded-lg cursor-pointer focus:outline-none focus:shadow-outline">
                <button className="cursor-pointer" type="submit">
                  Submit Form
                </button>
              </div>
              {error && <div className="text-red-400 p-1">{error}</div>}
              <p className="text-sm xl:mt-6">
                Don't have an account?
                <Link
                  href="/register"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sky800 to-sky300 font-bold text-base xl:pt-10 ml-1"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

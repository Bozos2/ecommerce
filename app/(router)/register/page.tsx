import Image from "next/image";
import Link from "next/link";
import RegisterIllustration from "../../assets/register-illustration.png";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row  justify-center mx-3 sm:mx-36 lg:mx-0 shadow-[0_10px_20px_rgba(135,_206,_235,_0.9)] rounded-xl max-w-[1100px] w-full h-[570px]">
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
          <form method="POST">
            <label
              className="block font-medium text-base text-zinc-500"
              htmlFor="fullname"
            >
              Full Name{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full  border-zinc-300 focus:outline-none focus:shadow-outline"
              type="text"
              id="fullname"
              title="fullname"
              placeholder="Alan Ford"
            />
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="email"
            >
              Email{" "}
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              type="text"
              id="email"
              title="email"
              placeholder="example@gmail.com"
            />
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              id="gender"
              title="gender"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label
              className="block font-medium text-base text-zinc-500 mt-3"
              htmlFor="birthdate"
            >
              Date of Birth
            </label>
            <input
              className="bg-sky-100 shadow border rounded-xl px-3  py-2 w-full border-zinc-300  focus:outline-none focus:shadow-outline"
              type="date"
              id="birthdate"
              title="birthdate"
            />
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

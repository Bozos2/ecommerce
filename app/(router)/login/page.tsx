import LoginForm from "@/app/components/Forms/LoginForm";

const Login = () => {
  return (
    <div className=" w-full  font-nunito bg-zinc-200">
      <div className="flex flex-col xl:flex-row gap-12 pb-24 pt-6 xl:pt-0 xl:pb-0 xl:px-4 2xl:px-36  xl:gap-0 xl:justify-around items-center xl:h-screen">
        <div className="max-w-[640px]">
          <h1 className="hidden xl:block xl:text-6xl xl:font-extrabold xl:text-sky-600">
            HomeDecor
          </h1>
          <p className="text-2xl font-medium pt-4 text-center xl:text-left">
            Dear User! To complete your purchase, you need to log in or create a
            user account.
          </p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-4xl sm:text-5xl font-bold">Home Decor eShop</h2>
        <p className="sm:py-5 text-lg mt-2 text-center">
          Design your home with us
        </p>
        <button className="ml-24  sm:ml-36 mt-6 px-8 py-2 border rounded hover:bg-sky-700  transition ease-in duration-300 hover:-translate-y-2 hover:scale-110">
          Products
        </button>
      </div>
    </div>
  );
};

export default Home;

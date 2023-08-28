const News = () => {
  return (
    <div className="flex  justify-center  h-screen ">
      <div className="flex flex-col items-center justify-center gap-4 max-w-[1000px] w-full  h-44 m-8 rounded bg-zinc-300">
        <h4 className="text-base pt-2 sm:text-lg font-bold">
          Welcome to News Page
        </h4>
        <h2 className="text-center p-2 text-lg sm:text-xl sm:px-24 font-bold">
          Discover a world of <span className="text-sky-700">inspiration</span>{" "}
          💡,
          <span className="text-sky-700">knowledge</span> 📚, and
          <span className="text-sky-700"> entertainment</span> 🎭 that will keep
          you informed and engaged.
        </h2>
      </div>
    </div>
  );
};
export default News;

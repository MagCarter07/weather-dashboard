function SkeletonLoader() {
  return (
    <div className="mt-12 flex flex-col lg:flex-row gap-8 animate-pulse">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 w-full lg:w-[500px] h-[250px]" />
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-full lg:w-[320px] h-[250px]" />
    </div>
  );
}

export default SkeletonLoader;

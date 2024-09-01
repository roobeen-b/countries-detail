import CardSkeleton from "./CardSkeleton";

const HomeSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-4 lg:gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default HomeSkeleton;

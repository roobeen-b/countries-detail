const LineSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm rounded animate-pulse dark:border-gray-700 mt-2"
    >
      <div className="text-white rounded-b-md">
        <h1 className="h-2.5 bg-gray-200 rounded-full w-48"></h1>
      </div>
    </div>
  );
};

export default LineSkeleton;

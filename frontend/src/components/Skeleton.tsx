export const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-3 mt-1 border border-l-0 border-r-0 border-t-0 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col ">
            <div className="h-7 w-7 bg-gray-200 rounded-full mb-4"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full w-8 mb-4"></div>
          <div className="h-1 w-1 mx-1 mt-1 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full w-8 mb-4"></div>
          <div className="pl-2 font-thin text-slate-700 mt-0.5">
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
          </div>
        </div>
        <div className=" font-semibold mt-3 mb-2 text-xl">
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        </div>
        <div className="font-light font-serif">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="h-2 mt-9 bg-gray-200 rounded-full w-48 mb-4"></div>
      </div>
    </div>
  );
};

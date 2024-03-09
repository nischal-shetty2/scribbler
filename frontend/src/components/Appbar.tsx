import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export const Appbar = () => {
  return (
    <div className="text-2xl border-b flex justify-between px-10 py-4 mb-2">
      <Link to={"/blogs"} className="hover:text-zinc-700 cursor-pointer">
        <Logo />
      </Link>
      <div className=" flex flex-col justify-center">
        <div className="flex">
          <Link to={"/publish"}>
            <button
              type="button"
              className="text-white  mr-5 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800">
              New blog
            </button>
          </Link>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className=" font-mono flex justify-center font-extrabold ">
      <div className="cursor-pointer flex flex-col justify-center p-2 hover:text-zinc-700">
        Scribbler
      </div>
    </div>
  );
};

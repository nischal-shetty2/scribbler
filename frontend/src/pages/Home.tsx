import { Logo } from "../components/Appbar";
import { Socials } from "../components/Quote";

export const Home = () => {
  return (
    <div className="max-w-screen ">
      <div className=" flex justify-end pt-4 pr-2 sticky top-0 ">
        <Socials size={35} />
      </div>
      <div className=" flex justify-center h-screen ">
        <div className="flex flex-col justify-center md:text-7xl text-5xl">
          <Logo />
          <div className="text-3xl font-light font-serif flex justify-center">
            <div>
              <div className="mt-5 mb-3 text-center md:text-3xl text-md">
                "Unleash Your Creativity!"
              </div>
              <div className="mb-3 text-center md:text-3xl text-md">
                Write, Publish, and Connect with Readers Worldwide!
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div>
              <HomeButton link="/signup" />
            </div>
            <div className="ml-20">
              <HomeButton link="/signin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeButton = ({ link }: { link: string }) => {
  const path = link.slice(1, link.length);
  return (
    <div className="relative inline-flex group border rounded-xl">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <a
        href={link}
        title={path}
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-500 transition-all duration-200 bg-slate-100 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button">
        {path}
      </a>
    </div>
  );
};

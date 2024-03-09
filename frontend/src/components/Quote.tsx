import { Logo } from "./Appbar";

export const Quote = () => {
  return (
    <div className=" bg-black text-white h-screen flex flex-col justify-center dark">
      <div className="flex justify-center ">
        <div className="max-w-md ">
          <div className="text-5xl mb-4">
            <Logo />
          </div>
          <div className="text-3xl font-light font-serif">
            Unleash Your Creativity!
            <br /> Write, Publish, and Connect with Readers Worldwide!
          </div>
          <div className=" my-2 text-xl font-light">Nischal shetty </div>
          <div className=" invert-100">
            <Socials size={30} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export const Socials = ({ size }: { size: number }) => {
  return (
    <div className=" flex ">
      {/* github */}
      <div className="hover:invert-[0.25]">
        <a target="_blank" href="https://github.com/nischal-shetty2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* linkedin */}
      <div className="ml-3 hover:invert-[0.25]">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nischal-shetty-2ba446272/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        </a>
      </div>

      {/* twitter */}
      <div className="ml-3 hover:invert-[0.25]">
        <a target="_blank" href="https://twitter.com/NischalShetty02">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={size}
            height={size}
            viewBox="0 0 50 50">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

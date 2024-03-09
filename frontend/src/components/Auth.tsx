import { SignupType } from "@nischal_shetty/blog-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupType>({
    email: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState<string | null>(""); // New state for error
  const [waiting, setWaiting] = useState<boolean>(false);
  async function sendRequest() {
    try {
      setWaiting(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInput
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      setError("Invalid Email or Password");
    } finally {
      setWaiting(false);
    }
  }
  return (
    <div className="flex h-screen flex-col justify-center ">
      <div className=" flex flex-row justify-center">
        <div className="max-w-lg">
          <div className="px-16 text-center text-3xl font-bold ">
            {type === "signup" ? "Create an account" : "Sign into your account"}
          </div>
          <div className="text-slate-400 text-center">
            {type === "signup"
              ? "Already have an account?"
              : "Dont have an account?"}{" "}
            <Link
              className="underline"
              to={type === "signup" ? "/signin" : "/signup"}>
              {type === "signup" ? `login` : "sign up"}
            </Link>
          </div>
          <div className="mt-7">
            {type === "signup" ? (
              <Labelinput
                label="Username"
                placeholder="nischal shetty"
                onChange={(e) => {
                  setPostInput({
                    ...postInput,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
          </div>
          <div>
            <Labelinput
              label="Email"
              placeholder="example@mail.xyz"
              onChange={(e) => {
                setError("");
                setPostInput({
                  ...postInput,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-6">
            <Labelinput
              label="Password"
              placeholder="Minimum 8 characters"
              onChange={(e) => {
                setError("");
                setPostInput({
                  ...postInput,
                  password: e.target.value,
                });
              }}
              type={"password"}
            />
            <div>
              {error != "" ? (
                <div
                  className=" flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                  role="alert">
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only"></span>
                  <div>
                    <span className="font-medium"></span>
                    {error}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <button
            onClick={sendRequest}
            type="button"
            className="w-full  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {!waiting ? type === "signup" ? "Sign up" : "Sign in" : <Loader />}
          </button>
        </div>
      </div>
    </div>
  );
};

interface labelInputType {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function Labelinput({ label, placeholder, onChange, type }: labelInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black ml-2 mt-2">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id={label}
        className=" bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
const Loader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

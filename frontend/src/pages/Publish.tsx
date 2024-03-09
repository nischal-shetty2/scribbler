import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [invalidInput, setInvalidInput] = useState<string | null>("");
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center pt-20">
          <div>
            {invalidInput != "" ? (
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
                  {invalidInput}
                </div>
              </div>
            ) : null}
            <div className="mb-9 w-screen max-w-sm sm:w-screen sm:max-w-xl">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Title
              </label>
              <input
                onChange={(e) => {
                  setInvalidInput("");
                  setTitle(e.target.value);
                }}
                placeholder="Enter the title"
                type="text"
                className="block w-full p-4 border border-t-0 border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 "
              />
            </div>{" "}
          </div>
          <div>
            <TextEditor
              onChange={(e) => {
                setInvalidInput("");
                setContent(e.target.value);
              }}
            />
            <button
              onClick={async () => {
                if (title.length <= 4 || content.length <= 4) {
                  setInvalidInput("The Title / Content is  too short");
                } else {
                  const response = await axios.post(
                    `${BACKEND_URL}/api/v1/blog`,
                    {
                      title,
                      content,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  );
                  navigate(`/blog/${response.data.id}`);
                }
              }}
              type="button"
              className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="relative w-full min-w-[200px]">
      <textarea
        onChange={onChange}
        className="peer h-full min-h-[200px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "></textarea>
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Content
      </label>
    </div>
  );
}

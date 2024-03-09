import { Appbar } from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="  grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
          <div className="  col-span-12 md:col-span-8 ">
            <div className=" text-4xl font-extrabold">{blog.title}</div>
            <div className=" text-slate-500 pt-2">
              Read Time: {Math.ceil(blog.content.length / 500)} min
            </div>
            <div className="text-xl pt-4">{blog.content}</div>
          </div>
          <div className="md:col-span-4 hidden md:block ">
            <AuthorDetails blog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
};
function AuthorDetails({ blog }: { blog: Blog }) {
  return (
    <div>
      <div className=" text-slate-400 font-light">Author:</div>
      <div className="flex pt-2">
        <div>
          <Avatar name={blog.author.name || "Anonymous"} size="big" />
        </div>
        <div className="pl-3">
          <div className="text-xl font-bold">
            {blog.author.name || "Anonymous"}
          </div>
          <div className="pt-2 text-md text-slate-400 font-semibold">
            This blog was curated by {blog.author.name || "Anonymous"} and
            posted to Scribbler
          </div>
        </div>
      </div>
    </div>
  );
}

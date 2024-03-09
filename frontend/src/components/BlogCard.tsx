import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;

  id: string;
}
export const BlogCard = ({ authorName, title, content, id }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="hover:invert-10 p-3 mt-1 border border-l-0 border-r-0 border-t-0 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col ">
            <Avatar name={authorName} size={"small"} />
          </div>
          <div className="font-light pl-2 mt-0.5">{authorName}</div>
          <div className="pl-1 text-gray-700 mt-0.5">&#183;</div>
        </div>
        <div className=" font-semibold mt-3 mb-2 text-xl">
          {title.length > 99 ? title.slice(0, 100) + "..." : title}
        </div>
        <div className="font-light font-serif">
          {content.length > 149 ? content.slice(0, 150) + "..." : content}
        </div>
        <div className="mt-4 mb-1 text-slate-500">{`${Math.ceil(
          content.length / 500
        )} min read`}</div>
      </div>
    </Link>
  );
};
export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={` hover:invert-10 cursor-pointer ${
        size === "small" ? "w-6 h-6" : "w-9 h-9"
      } relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span
        className={` ${
          size === "small" ? "text-xs" : "text-lg"
        } text-gray-600 dark:text-gray-300`}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

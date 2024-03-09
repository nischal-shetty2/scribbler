import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="mb-9">
        <Appbar />
        <div className=" flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mb-9">
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog, index) => (
            <BlogCard
              title={blog.title}
              authorName={blog.author.name || "anonymous"}
              content={blog.content}
              id={blog.id}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

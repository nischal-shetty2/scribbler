import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/Skeleton";
import { Appbar } from "../components/Appbar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="mt-16 flex justify-center">
          <Skeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

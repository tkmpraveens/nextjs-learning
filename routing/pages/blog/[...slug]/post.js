import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <div>Blog Post</div>;
};

export default BlogPost;

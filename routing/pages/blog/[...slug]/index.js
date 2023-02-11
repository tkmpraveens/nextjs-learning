import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <div>Blog Page</div>;
};

export default BlogPage;

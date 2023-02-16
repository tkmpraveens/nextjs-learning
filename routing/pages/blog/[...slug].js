import { useRouter } from "next/router";

const BlogDetailsPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <h1>Specific Blog Page</h1>;
};

export default BlogDetailsPage;

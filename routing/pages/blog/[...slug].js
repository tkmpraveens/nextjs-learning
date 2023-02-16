import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <main className="main">
      <h1 className="title">Blog Details</h1>
      <section>
        <p>Pathname: {JSON.stringify(router.pathname)}</p>
        <p>Query: {JSON.stringify(router.query)}</p>
      </section>
    </main>
  );
};

export default BlogDetails;

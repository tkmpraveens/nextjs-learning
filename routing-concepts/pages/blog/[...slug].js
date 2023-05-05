import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();

  return (
    <main className="main">
      <h1 className="title">Blog Details</h1>
      <section>
        <p>
          <b>Pathname: </b>
          {JSON.stringify(router.pathname)}
        </p>
        <p>
          <b>Query: </b>
          {JSON.stringify(router.query)}
        </p>
      </section>
    </main>
  );
};

export default BlogDetails;

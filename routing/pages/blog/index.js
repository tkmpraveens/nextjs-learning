import Link from "next/link";

const BlogPage = () => {
  return (
    <main className="main">
      <h1>Blog page</h1>
      <section>
        <Link className="link" href={`/blog/list`}>
          See the list of blogs
        </Link>
      </section>
    </main>
  );
};

export default BlogPage;

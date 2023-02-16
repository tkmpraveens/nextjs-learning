import Link from "next/link";

const BlogList = () => {
  const blogList = [
    {
      title: "The Power of Positive Thinking",
      link: "2023/Jan/positive-thinking",
    },
    {
      title: "5 Ways to Boost Your Productivity",
      link: "2022/Dec/boost-productivity",
    },
    {
      title: "The Benefits of Yoga for Mind and Body",
      link: "2023/jan/yoga",
    },
    {
      title: "How to Build a Successful Online Business",
      link: "2022/may/successful-online-business",
    },
    {
      title: "The Future of Artificial Intelligence",
      link: "2023/feb/The Future of Artificial Intelligence", //This will also work. The URL will be stringified, and any spaces will be replaced with '%20'
    },
  ];

  return (
    <main className="main">
      <h1 className="title">List of Blogs</h1>
      <ul>
        {blogList.map((blog, i) => {
          return (
            <li key={i}>
              <Link className="link" href={`/blog/${blog.link}`}>
                {blog.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default BlogList;

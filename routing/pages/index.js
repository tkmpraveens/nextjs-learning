import Link from "next/link";

const HomePage = () => {
  const linkList = ["portfolio", "client", "blog", "about"];

  return (
    <main className="main">
      <h1 className="title">Home Page</h1>
      <ul>
        {linkList.map((link, i) => {
          return (
            <li key={i}>
              <Link className="link" href={`/${link}`}>
                {link} Page
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default HomePage;

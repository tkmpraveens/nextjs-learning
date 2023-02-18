import Link from "next/link";

const PortfolioPage = () => {
  return (
    <main className="main">
      <h1>Portfolio page</h1>
      <section>
        <Link className="link" href={`/portfolio/list`}>
          See the list of portfolios
        </Link>
      </section>
    </main>
  );
};

export default PortfolioPage;

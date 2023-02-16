import Link from "next/link";

const PortfolioList = () => {
  const portfolioList = [
    {
      title: "Investment Portfolio",
      link: "investment-portfolio",
    },
    {
      title: "Patent Portfolio",
      link: "patent-portfolio",
    },
    {
      title: "Intellectual Property Portfolio",
      link: "Intellectual Property Portfolio", //This will also work. The URL will be stringified, and any spaces will be replaced with '%20'
    },
  ];

  return (
    <main className="main">
      <h1 className="title">List of Portfolios</h1>
      <ul>
        {portfolioList.map((portfolio, i) => {
          return (
            <li key={i}>
              <Link
                className="link"
                href={{
                  pathname: `/portfolio/[portfolioId]`,
                  query: { portfolioId: portfolio.link },
                }}
              >
                {portfolio.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default PortfolioList;

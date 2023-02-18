import { useRouter } from "next/router";

const PortfolioDetailPage = () => {
  const router = useRouter();

  return (
    <main className="main">
      <h1 className="title">Portfolio Detail Page</h1>
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

export default PortfolioDetailPage;

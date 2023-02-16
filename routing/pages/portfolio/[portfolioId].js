import { useRouter } from "next/router";

const PortfolioDetailPage = () => {
  const router = useRouter();

  return (
    <main className="main">
      <h1 className="title">Portfolio Detail Page</h1>
      <section>
        <p>Pathname: {JSON.stringify(router.pathname)}</p>
        <p>Query: {JSON.stringify(router.query)}</p>
      </section>
    </main>
  );
};

export default PortfolioDetailPage;

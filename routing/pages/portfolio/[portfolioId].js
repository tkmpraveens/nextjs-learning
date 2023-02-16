import { useRouter } from "next/router";

const PortfolioDetailPage = () => {
  const router = useRouter();

  console.log(router.pathname, router.query);

  return <div>Portfolio Detail Page</div>;
};

export default PortfolioDetailPage;

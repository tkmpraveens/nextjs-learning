import { useRouter } from "next/router";

const ClientProjectDetailPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <h1>Client Project Detail Page</h1>;
};

export default ClientProjectDetailPage;

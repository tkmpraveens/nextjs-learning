import { useRouter } from "next/router";

const ClientDetailPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <h1>Client Detail Page</h1>;
};

export default ClientDetailPage;

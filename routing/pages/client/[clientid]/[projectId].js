import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  return <div>Client Project Page</div>;
};

export default ClientProjectPage;

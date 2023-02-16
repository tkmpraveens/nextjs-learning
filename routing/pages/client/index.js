import { useRouter } from "next/router";

import Link from "next/link";

const ClientPage = () => {
  const router = useRouter();
  console.log(router.pathname, router.query);

  const clientId = "tesla";
  const projectId = "model x";

  return (
    <div>
      <h1>Client Page</h1>
      <Link href={`/client/${clientId}/${projectId}`}>
        Read about project from the client
      </Link>

      <Link
        href={{
          pathname: "/client/[clientId]/[projectId]",
          query: { clientId, projectId },
        }}
      >
        Read about project from the client
      </Link>
    </div>
  );
};

export default ClientPage;

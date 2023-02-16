import { useRouter } from "next/router";

import Link from "next/link";

const ClientDetailsPage = () => {
  const router = useRouter();
  const { clientId } = router.query;

  const projectList = {
    tesla: ["Model S", "Model 3", "Model X", "Model Y", "Roadster"],
    apple: [
      "iPhone",
      "iPad",
      "Mac",
      "Apple Watch",
      "Apple TV",
      "AirPods",
      "HomePod",
    ],
    google: [
      "Google search",
      "Android",
      "Chrome",
      "Google Workspace",
      "Google Maps",
    ],
  };

  return (
    <main className="main">
      <h1 className="title">Projects of {clientId}</h1>
      <ul>
        {projectList?.[clientId]?.map((projectId, i) => {
          return (
            <li key={i}>
              <Link
                href={{
                  pathname: "/client/[clientId]/[projectId]",
                  query: { clientId, projectId },
                }}
              >
                {projectId}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ClientDetailsPage;

import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  return (
    <main className="main">
      <h1 className="title">Client Project Page</h1>
      <section>
        <p>Pathname: {JSON.stringify(router.pathname)}</p>
        <p>Query: {JSON.stringify(router.query)}</p>
      </section>
    </main>
  );
};

export default ClientProjectPage;

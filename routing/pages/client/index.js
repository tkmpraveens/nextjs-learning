import Link from "next/link";

const ClientPage = () => {
  return (
    <main className="main">
      <h1>Client page</h1>
      <section>
        <Link className="link" href={`/client/list`}>
          See the list of Clients
        </Link>
      </section>
    </main>
  );
};

export default ClientPage;

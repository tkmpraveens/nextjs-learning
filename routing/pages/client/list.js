import Link from "next/link";

const ClientList = () => {
  const clientList = ["tesla", "apple", "google"];

  return (
    <main className="main">
      <h1 className="title">Client List</h1>
      <ul>
        {clientList.map((client, i) => {
          return (
            <li key={i}>
              <Link href={`/client/[clientId]`} as={`/client/${client}`}>
                {`Details about ${client}`}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ClientList;

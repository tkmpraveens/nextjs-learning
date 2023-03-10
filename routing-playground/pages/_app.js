import "@/styles/reset.scss";
import "@/styles/common.scss";

import Layout from "@/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

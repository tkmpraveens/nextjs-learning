import Header from "./header";

import { Roboto } from "@next/font/google";
const font = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Layout = (props) => {
  const { children } = props;
  return (
    <main className={font.className}>
      <Header />
      <main>{children}</main>
    </main>
  );
};

export default Layout;

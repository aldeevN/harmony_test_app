import Head from "next/head";
import Header from "./header";
interface IUser {
  name: string;
  avatar: string;
}
type LayoutProps = {
  user?: IUser;
  loading?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Harmony</title>
      </Head>
      <Header />
      <main className="bg-slate-200 h-screen">{children}</main>
    </>
  );
};

export default Layout;

import Head from "next/head";
import { useState } from "react";
import { Header, Footer, MobileMenu } from "..";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Clean City - ბინების დასუფთავება თბილისში, ბათუმი</title>
      </Head>
      <Header setIsMobileMenuOpened={setIsMobileMenuOpened} />
      <main>{children}</main>
      <Footer />
      <MobileMenu isMenuOpened={isMobileMenuOpened} setIsMobileMenuOpened={setIsMobileMenuOpened} />
    </>
  );
};

export default Layout;

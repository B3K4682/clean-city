import type { GetStaticProps, NextPage } from "next";
import { Hero, Layout } from "../components";
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(
      props.locale ?? i18nextConfig.i18n.defaultLocale,
      ["common"]
    )),
  },
});

export default Home;

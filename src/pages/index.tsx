// Next type imports
import type { GetStaticProps, NextPage } from "next";

// Component imports
import {
  Hero,
  AboutComp,
  Order,
  ServicesComp,
  HowWeWork,
  ContactComp,
} from "../components";

// Translation imports
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutComp />
      <Order />
      <ServicesComp />
      <HowWeWork />
      <ContactComp />
    </>
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

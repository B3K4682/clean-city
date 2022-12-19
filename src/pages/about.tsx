// Next type imports
import type { GetStaticProps, NextPage } from "next";

// Component imports
import { AboutComp, Order } from "../components";

// Translation imports
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Import constants
import { aboutUs } from "../util/constants";

interface IAboutProps {}

const About: NextPage<IAboutProps> = () => {
  return (
    <>
      <AboutComp aboutData={aboutUs} />
      <Order />
      <div style={{ marginBottom: "192px" }}></div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(
        props.locale ?? i18nextConfig.i18n.defaultLocale,
        ["common"]
      )),
    },
  };
};

export default About;

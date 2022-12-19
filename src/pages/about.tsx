// Next type imports
import type { GetStaticProps, NextPage } from "next";

// Component imports
import { AboutComp, Order } from "../components";

// Translation imports
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IAboutProps {
  aboutData: {
    aboutKa: string;
    aboutEn: string;
  };
}

const About: NextPage<IAboutProps> = ({ aboutData }) => {
  return (
    <>
      <AboutComp aboutData={aboutData} />
      <Order />
      <div style={{ marginBottom: "192px" }}></div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const about = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/about`);
  const aboutData = await about.json();
  
  return {
    props: {
      aboutData,
      ...(await serverSideTranslations(
        props.locale ?? i18nextConfig.i18n.defaultLocale,
        ["common"]
      )),
    },
  };
};

export default About;

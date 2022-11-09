// Next type imports
import type { GetStaticProps, NextPage } from "next";

// Component imports
import { ContactComp } from "../components";

// Translation imports
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Services: NextPage = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <ContactComp contactIcon="right" />
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

export default Services;

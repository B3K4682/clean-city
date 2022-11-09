// Next type imports
import type { GetStaticProps, NextPage } from "next";

// Component imports
import { BlogComp } from "../components";

// Constants
import { blogs } from "../util/constants";

// Translation imports
import i18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blog: NextPage = () => {
  return (
    <>
      <BlogComp blogs={blogs} />
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

export default Blog;

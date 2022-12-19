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

// Import types
import type { HeroSlidesType } from "../util/types";

interface IHomeProps {
  heroSlides: HeroSlidesType[];
  aboutData: {
    aboutKa: string;
    aboutEn: string;
  };
}

const Home: NextPage<IHomeProps> = ({ heroSlides, aboutData }) => {
  return (
    <>
      <Hero heroSlides={heroSlides} />
      <AboutComp aboutData={aboutData} />
      <Order />
      <ServicesComp />
      <HowWeWork />
      <ContactComp />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/banners`);
  const heroSlides = await banners.json();
  const about = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/about`);
  const aboutData = await about.json();

  return {
    props: {
      heroSlides,
      aboutData,
      ...(await serverSideTranslations(
        props.locale ?? i18nextConfig.i18n.defaultLocale,
        ["common"]
      )),
    },
  };
};

export default Home;

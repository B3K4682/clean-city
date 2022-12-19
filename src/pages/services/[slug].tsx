// Next imports
import { GetStaticPaths, GetStaticProps } from "next";

// Import components
import { ServiceSingle, Container } from "../../components";

// Constants
import { services } from "../../util/constants";

// Types
import { ServiceType } from "../../util/types";

// Translation imports
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../../../next-i18next.config";

interface IServiceProps {
  service: ServiceType;
  relatedServices: ServiceType[];
}

const Service: React.FunctionComponent<IServiceProps> = ({
  service,
  relatedServices,
}) => {
  return (
    <div style={{ marginTop: "64px", marginBottom: "64px" }}>
      <Container>
        <ServiceSingle service={service} relatedServices={relatedServices} />
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const service = services.find((service) => service.slug === params?.slug);

  const relatedServices = services.filter(
    (service) => service.slug !== params?.slug
  );

  return {
    props: {
      service,
      relatedServices,
      ...(await serverSideTranslations(
        locale ?? nextI18nextConfig.i18n.defaultLocale,
        ["common"]
      )),
    },
  };
};

export default Service;

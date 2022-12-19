// Import styles
import styles from "./Service.module.css";

// Import components
import ServiceCard from "../ServiceCard/ServiceCard";
import { Container } from "../..";

// Import types
import { ServiceType } from "../../../util/types";

// Import translations
import { useTranslation } from "next-i18next";

interface IServiceProps {
  service: ServiceType;
  relatedServices: ServiceType[];
}

const Service: React.FunctionComponent<IServiceProps> = ({
  service,
  relatedServices,
}) => {
  const { title, description } = service;

  const { t } = useTranslation("common");

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.relateds}>
          <Container>
            <h3 className={styles.title}>{t("related_services")}</h3>
            {relatedServices.map((service) => (
              <ServiceCard service={service} key={service.id} isRelated />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Service;

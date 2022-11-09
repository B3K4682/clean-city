// Next imports
import Image from "next/image";
import Link from "next/link";

// Style imports
import styles from "./Services.module.css";

// Import Components
import { Container, Button } from "..";

// Import Constants
import { services } from "../../util/constants";

// Import translation
import { useTranslation } from "next-i18next";

interface IServicesProps {}

const ServicesComp: React.FunctionComponent<IServicesProps> = (props) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.about}>
      <h2 className={styles.title}>{t("our_services")}</h2>
      <Container>
        <div className={styles.card_inner}>
          <div className={`${styles.card_wrapper}`}>
            <div className={styles.cards}>
              {services.map((service, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.card_icon}>
                    <Image
                      src={`/images/services/${service.image}`}
                      alt={
                        currentLanguage === "en"
                          ? service.titleEn
                          : service.title
                      }
                      width={289}
                      height={273}
                    />
                  </div>
                  <div className={styles.card_description}>
                    <h3 className={styles.card_title}>
                      {currentLanguage === "en"
                        ? service.titleEn
                        : service.title}
                    </h3>
                    <div className={styles.action}>
                      <Button type="primary" size="full">
                        <Link href={service.link}>{t("details")}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.link}>
        <Button type="primary">
          <Link href={"/"}>{t("order_now")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesComp;

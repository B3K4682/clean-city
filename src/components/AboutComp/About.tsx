import styles from "./About.module.css";

// Import Components
import { Container } from "..";

// Import constants
import { whyChooseUs, aboutUs } from "../../util/constants";
import Image from "next/image";

// Import translation
import { useTranslation } from "next-i18next";

interface IAboutProps {}

const AboutComp: React.FunctionComponent<IAboutProps> = (props) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.about}>
      <h2 className={styles.title}>{t("about_us")}</h2>
      <Container>
        <div className={styles.description}>
          <div className={styles.text}>
            {currentLanguage === "en" ? aboutUs.aboutEn : aboutUs.aboutKa}
          </div>
        </div>
      </Container>
      <h2 className={styles.title}>{t("why_us")}</h2>
      <Container>
        <div className={styles.card_inner}>
          <div className={`${styles.card_wrapper}`}>
            <div className={styles.cards}>
              {whyChooseUs.map((item, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.card_icon}>
                    <Image
                      src={`/images/icons/checkmarks/0${i + 1}.png`}
                      alt={item.title}
                      width={54}
                      height={54}
                    />
                  </div>
                  <div className={styles.card_description}>
                    <h3 className={styles.card_title}>
                      {currentLanguage === "en" ? item.titleEn : item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutComp;

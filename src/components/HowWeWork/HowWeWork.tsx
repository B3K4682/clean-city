// Next imports
import Image from "next/image";

// Style imports
import styles from "./HowWeWork.module.css";

// Import components
import { Container } from "..";

// Import constants
import { howWeWork } from "../../util/constants";

// Import translation
import { useTranslation } from "next-i18next";

interface IHowWeWorkProps {}

const HowWeWork: React.FunctionComponent<IHowWeWorkProps> = (props) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.about}>
      <h2 className={styles.title}>{t("how_we_work")}</h2>
      <Container>
        <div className={styles.card_inner}>
          <div className={`${styles.card_wrapper}`}>
            <div className={styles.cards}>
              {howWeWork.map((work, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.card_icon}>
                    <Image
                      src={`/images/icons/checkmarks/0${i + 1}.png`}
                      alt={work.title}
                      width={54}
                      height={54}
                    />
                  </div>
                  <div className={styles.card_description}>
                    <h3 className={styles.card_title}>
                      {currentLocale === "ka" ? work.title : work.titleEn}
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

export default HowWeWork;

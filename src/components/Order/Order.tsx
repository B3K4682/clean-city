import styles from "./Order.module.css";

// Images import
import Timer from "../../../public/images/icons/timer";

// Import components
import { Button, Container } from "..";

// Import translation
import { useTranslation } from "next-i18next";

interface IOrderProps {}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.order}
      style={{
        background: `linear-gradient(0deg, rgba(98, 207, 115, 0.8), rgba(98, 207, 115, 0.8)), url(/images/testBanner.jpeg)`,
      }}
    >
      <Container>
        <div className={styles.order_content}>
          <div className={styles.order_icon}>
            <Timer />
          </div>
          <div className={styles.order_description}>
            <h3>{t("order_cleaning")}</h3>
          </div>
          <div className={styles.action}>
            <Button type="blank" onClick={() => {}}>
              {t("order_now")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;

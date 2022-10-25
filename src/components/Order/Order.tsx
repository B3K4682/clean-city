import styles from "./Order.module.css";

// Images import
import Timer from "../../../public/images/icons/timer";

// Import components
import { Button, Container } from "..";

interface IOrderProps {}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  return (
    <div
      className={styles.order}
      style={{
        background: `linear-gradient(0deg, rgba(98, 207, 115, 0.8), rgba(98, 207, 115, 0.8)), url(/images/testBanner.jpeg);`,
      }}
    >
      <Container>
        <div className={styles.order_content}>
          <div className={styles.order_icon}>
            <Timer />
          </div>
          <div className={styles.order_description}>
            <h3>შეუკვეთე დასუფთავება 60 წამში!</h3>
          </div>
          <div className={styles.action}>
            <Button type="blank" onClick={() => {}}>
              შეუკვეთეთ დასუფთავება
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;

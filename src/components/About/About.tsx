import styles from "./About.module.css";

// Import Components
import { Container } from "..";

// Import constants
import { whyChooseUs } from "../../util/constants";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>ჩვენს შესახებ</h2>
      <Container>
        <div className={styles.description}>
          <div className={styles.text}>
            დასუფთავების კომპანია CLEAN CITY გთავაზობთ ბინების, კერძო სახლების,
            შენობებისა და კომერციული ფართების სხვადასხვა სახის მომსახურებას.
          </div>
        </div>
      </Container>
      <h2 className={styles.title}>რატომ ჩვენ?</h2>
      <Container>
        <div className={styles.card_inner}>
          <div className={`${styles.card_wrapper}`}>
            <div className={styles.cards}>
              {whyChooseUs.map((item, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.card_icon}>
                    <img
                      src={`/images/icons/checkmarks/0${i + 1}.png`}
                      alt={item.title}
                      width={54}
                      height={54}
                    />
                  </div>
                  <div className={styles.card_description}>
                    <h3 className={styles.card_title}>{item.title}</h3>
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

export default About;

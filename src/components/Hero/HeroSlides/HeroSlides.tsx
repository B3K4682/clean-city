// Import styles
import { Container, Button } from "../../";
import styles from "./HeroSlides.module.css";

interface IHeroSlidesProps {
  title: string;
  buttonText: string;
  background: string;
}

const HeroSlides: React.FunctionComponent<IHeroSlidesProps> = ({
  title,
  buttonText,
  background,
}) => {
  return (
    <div
      className={styles.banner_wrapper}
      style={{
        background: `linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0) 47.92%, rgba(0, 0, 0, 0.72) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
      }}
    >
      <div className={styles.banner_description}>
        <Container>
          <div className={styles.text}>
            <h2>{title}</h2>
          </div>
          <div className={styles.action}>
            <Button type="primary" onClick={() => {}}>
              {buttonText}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSlides;

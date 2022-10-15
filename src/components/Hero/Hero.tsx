import { SwiperSlide } from "swiper/react";
import { Slider, Container } from "..";
import styles from "./Hero.module.css";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <Slider>
          <SwiperSlide>
            <div
              className={styles.banner_wrapper}
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0) 47.92%, rgba(0, 0, 0, 0.72) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/testBanner.jpeg')",
              }}
            >
              <div className={styles.banner_description}>
                <Container>
                  zd
                </Container>
              </div>
            </div>
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

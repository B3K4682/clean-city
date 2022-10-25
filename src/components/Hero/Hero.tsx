import { SwiperSlide } from "swiper/react";
import { Slider } from "..";
import styles from "./Hero.module.css";
import HeroSlides from "./HeroSlides/HeroSlides";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <Slider>
          <SwiperSlide>
            <HeroSlides
              background="/images/testBanner.jpeg"
              title="შეუკვეთეთ დასუფთავების მომსახურება ჩვენს ვებ-გვერდზე ონლაინ"
              buttonText="მიმართეთ ონლაინ"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlides
              background="/images/testBanner.jpeg"
              title="შეუკვეთეთ დასუფთავების მომსახურება ჩვენს ვებ-გვერდზე ონლაინ"
              buttonText="მიმართეთ ონლაინ"
            />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

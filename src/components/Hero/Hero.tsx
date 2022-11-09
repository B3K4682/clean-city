// Import styles
import styles from "./Hero.module.css";

// Import node_modules
import { SwiperSlide } from "swiper/react";
import { Slider } from "..";

// Import components
import HeroSlides from "./HeroSlides/HeroSlides";

// Import constants
import { heroSlides } from "../../util/constants";

// Import translation
import { useTranslation } from "next-i18next";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <Slider>
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <HeroSlides
                background={slide.background}
                title={currentLanguage === "en" ? slide.titleEn : slide.titleKa}
                buttonText={currentLanguage === "en" ? slide.buttonEn : slide.buttonKa}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

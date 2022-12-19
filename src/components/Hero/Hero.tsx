// Import styles
import styles from "./Hero.module.css";

// Import node_modules
import { SwiperSlide } from "swiper/react";
import { Slider } from "..";

// Import components
import HeroSlides from "./HeroSlides/HeroSlides";

// Import types
import type { HeroSlidesType } from "../../util/types";

// Import translation
import { useTranslation } from "next-i18next";

interface IHeroProps {
  heroSlides: HeroSlidesType[];
}

const Hero: React.FunctionComponent<IHeroProps> = ({ heroSlides }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <Slider>
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <HeroSlides
                background={slide.image}
                title={currentLanguage === "en" ? slide.titleEn : slide.title}
                buttonText={
                  currentLanguage === "en"
                    ? slide.buttonTextEn
                    : slide.buttonText
                }
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

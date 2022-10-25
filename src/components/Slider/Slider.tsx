// Main css
import styles from "./Slider.module.css";

// Swiper Imports
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

interface ISliderProps {
  children: React.ReactNode
}

const Slider: React.FunctionComponent<ISliderProps> = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;

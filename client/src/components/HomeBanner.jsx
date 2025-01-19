import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bannerpic1 from "../../assets/bannerpic1.jpg";
import bannerpic2 from "../../assets/bannerpic2.jpg";
import bannerpic3 from "../../assets/bannerpic3.jpg";

const HomeBanner = () => {
  const images = [bannerpic1, bannerpic2, bannerpic3];

  return (
    <div className="relative w-full h-[600px] lg:h-[600px] z-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        slidesPerView={1}
        speed={3000}
        className="absolute inset-0 h-full w-full z-0 pointer-events-none"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                filter: "blur(4px)",
                transform: "scale(1.1)",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-2xl font-bold lg:text-6xl">
          <motion.h2
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              lineHeight: "5",
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="z-0"
          >
            <h1
              style={{
                textShadow: "4px 4px 1px rgba(0, 0, 0, 0.7)",
              }}
              className="font-mono"
            >
              Explore all the blog pics
            </h1>
          </motion.h2>
        </h1>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-black-200 font-bold hover:underline"
        >
          <h3
            style={{
              textShadow: "4px 4px 1px rgba(0, 0, 0, 0.7)",
            }}
          >
            View all posts
          </h3>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-5"></div>
      <h1>hello</h1>
    </div>
  );
};

export default HomeBanner;
